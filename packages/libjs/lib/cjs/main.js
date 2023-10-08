'use strict';

var lodash = require('lodash');

const subtract = (a, b) => {
  return lodash.subtract(a, b);
};

const hello = (name) => {
  console.log(`Hello ${name}`);
};

const add = (a, b) => {
  return a + b;
};

exports.add = add;
exports.hello = hello;
exports.subtract = subtract;
