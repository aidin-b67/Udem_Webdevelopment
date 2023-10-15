const fs = require("fs");

fs.writeFile("message2.txt", "Hello from Node JS", (error => {
    if (err) throw err;
    console.log("The file has been saved!")
}))