"use strict";
const Koa = require("koa");
const Router = require("koa-router");
const config = require("./config");
const roman = require("./roman");

const app = new Koa();
const router = new Router();

router.get("/v1/roman/:number", async ctx => {
  if (isNaN(ctx.params.number)) {
    return (ctx.status = 404);
  }

  const number = parseInt(ctx.params.number);

  if (number > 10000 || number < 1) {
    return (ctx.status = 404);
  }

  ctx.body = {
    href: ctx.path,
    number: number,
    roman: roman.parse(number)
  };
});

app.use(router.routes()).use(router.allowedMethods());

if (config.listen) {
  app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}/v1/roman/10`);
  });
}

module.exports = app;
