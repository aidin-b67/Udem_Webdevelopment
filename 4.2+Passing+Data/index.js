import express from "express";
import bodyParser from "body-parser";
import puppeteer from "puppeteer"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const numLetter = req.body["fName"].length + req.body["lName"].length;
  
  res.render("solution.ejs", { numberOfLetters : numLetter });

  //trying to use querySelector to to change h1 value but with node js we can't
 // const h1Change = document.querySelector("h1").innerHTML = `There are ${numLetter} in your lovely name`
  //res.render("index.ejs", { numberOfLetters : h1Change })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
