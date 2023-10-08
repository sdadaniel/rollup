import { subtract as l_subtact } from "lodash";

const subtract = (a: number, b: number) => {
  return l_subtact(a, b);
};

const hello = (name: string) => {
  console.log(`Hello ${name}`);
};

const add = (a: number, b: number) => {
  return a + b;
};

export { hello, add, subtract };
