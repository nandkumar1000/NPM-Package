import { sayHelloProps } from "./types";

export function sayHello({
  firstname,
  lastname,
  age
}: sayHelloProps) {
  console.log("Hello");
  console.log(`Your first name: ${firstname}`);

  if (lastname) {
    console.log(`Your last name: ${lastname}`);
  }

  if (age) {
    console.log(`Your age: ${age}`);
  }
}
