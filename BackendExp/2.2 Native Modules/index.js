const { error } = require("console");
const fs = require ("fs");

// fs.writeFile("Messege.txt", "Hello from Node JS", (err) => {
// if (err) throw err;
// console.log("The file has been saved!")
// });

fs.readFile("./Messege.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 