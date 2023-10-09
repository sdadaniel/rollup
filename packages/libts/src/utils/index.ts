interface helloType {
  (name: string): void;
}
const subtract = (a: number, b: number) => {
  return a - b;
};

//주석은 사라집니다.
// 주석은 사라져야해
const hello: helloType = (name: string) => {
  console.log(`Hello ${name}`);
};

const add = (a: number, b: number) => {
  return a + b;
  console.log("123");
};

export { hello, add, subtract };
