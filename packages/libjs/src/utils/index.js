import { subtract as l_subtact } from "lodash";

const subtract = (a, b) => {
  return l_subtact(a, b);
};

const hello = (name) => {
  console.log(`Hello ${name}`);
};

const add = (a, b) => {
  return a + b;
};

export { hello, add, subtract };
