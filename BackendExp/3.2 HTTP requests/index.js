import express from "express";
const app = express()
const port = 3000

app.get("/", (req,res) =>{
    res.send("<h1>Hello Aidin <a href=`https://www.google.com`>Google</a> </h1>");
});

app.get("/aboutme", (req,res) => {
    res.send("<h1>About me</h1>")
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});