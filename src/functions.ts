import { nandsayHelloProps } from "./types";

export function nandsayHello({
  firstname,
  lastname,
  age
}: nandsayHelloProps) {
  console.log("Hello");
  console.log(`Your first name: ${firstname}`);

  if (lastname) {
    console.log(`Your last name: ${lastname}`);
  }

  if (age) {
    console.log(`Your age: ${age}`);
  }
}
