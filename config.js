"use strict";
module.exports = {
  listen: process.env.NODE_ENV !== "test",
  port: process.env.PORT || 3000
};
