"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = exports.hello = void 0;
var lodash_1 = require("lodash");
var subtract = function (a, b) {
    return (0, lodash_1.subtract)(a, b);
};
exports.subtract = subtract;
var hello = function (name) {
    console.log("Hello ".concat(name));
};
exports.hello = hello;
var add = function (a, b) {
    return a + b;
};
exports.add = add;
