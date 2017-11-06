# Roman Numerals

### Description
This is an simple api that exposes one single endpoint `GET /v1/roman/:number` that converts a number between 0-10000 to a roman numeral.

To run the application locally do the following:

```bash
npm install
npm start

# run tests
npm test
```


To run the application with docker do the following:

```bash
docker-compose build
docker-compose up

# run tests
docker-compose api npm test
```

### Deployment

If you want to deploy it to AWS I would recommend you using the Docker mode in Elastic Beanstalk. It is super simple to set up, prowen in battle and you get the all the power of the AWS platform including loadbalancer, zero-down-time deployment and lots of other features.