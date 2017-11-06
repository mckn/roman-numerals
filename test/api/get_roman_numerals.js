"use strict";
const test = require("ava");
const request = require("supertest-koa-agent");
const server = require("../../server");

test("GET /v1/roman/50 should return 200 OK with response numeral L", async t => {
  t.plan(4);

  const url = "/v1/roman/50";
  const res = await request(server).get(url);

  t.is(res.status, 200);
  t.is(res.body.href, url);
  t.is(res.body.number, 50);
  t.is(res.body.roman, "L");
});

test("GET /v1/roman/10 should return 200 OK with response numeral X", async t => {
  t.plan(4);

  const url = "/v1/roman/10";
  const res = await request(server).get(url);

  t.is(res.status, 200);
  t.is(res.body.href, url);
  t.is(res.body.number, 10);
  t.is(res.body.roman, "X");
});

test("GET /v1/roman/100000 should return 404 missing", async t => {
  const url = "/v1/roman/100000";
  const res = await request(server).get(url);

  t.is(res.status, 404);
});

test("GET /v1/roman/-1 should return 404 missing", async t => {
  const url = "/v1/roman/-1";
  const res = await request(server).get(url);

  t.is(res.status, 404);
});

test("GET /v1/roman/asdf should return 404 missing", async t => {
  const url = "/v1/roman/adsf";
  const res = await request(server).get(url);

  t.is(res.status, 404);
});
