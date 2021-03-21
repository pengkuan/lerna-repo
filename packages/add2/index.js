import { pkAdd } from "pk-add";
export const add2 = (m, n) => {
  pkAdd(5, 6);
  console.log("pk add2");
  return m + n;
};
