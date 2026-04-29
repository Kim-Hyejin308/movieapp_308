import { readFileSync, readFile } from "node:fs";

console.log(1);
const data = readFileSync("./file.txt", { encoding: "utf-8" });

console.log(2);
console.log(data);
console.log(3);

console.log("a");
readFile("./file.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log("b");
});
console.log("c");
