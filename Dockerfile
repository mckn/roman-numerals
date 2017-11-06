FROM node:8-alpine

RUN mkdir -p /usr/src/app && \
  chown -R node.node /usr/src/app

WORKDIR /usr/src/app
USER node

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json package-lock.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "node", "."]