config = require("./base");
config.extends = [
  "eslint-config-airbnb-base",
  "eslint-config-airbnb-base/rules/strict",
  "plugin:prettier/recommended",
];
module.exports = config;
