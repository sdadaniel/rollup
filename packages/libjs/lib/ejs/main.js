import { subtract as subtract$1 } from 'lodash';

const subtract = (a, b) => {
  return subtract$1(a, b);
};

const hello = (name) => {
  console.log(`Hello ${name}`);
};

const add = (a, b) => {
  return a + b;
};

export { add, hello, subtract };
