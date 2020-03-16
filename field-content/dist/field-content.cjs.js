'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./field-content.cjs.prod.js");
} else {
  module.exports = require("./field-content.cjs.dev.js");
}
