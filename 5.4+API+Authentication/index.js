import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "borhani1368";
const yourPassword = "b136888";
const yourAPIKey = "b1e459bb-64cf-4b34-aecd-0f9f1a7745fb";
const yourBearerToken = "af21c4ef-8780-4338-843b-fab9faa22425";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    console.log(result.data)
    res.render("index.ejs", {content: JSON.stringify(result.data)})
  } catch (error){
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
try{
  const result = await axios.get(API_URL + "/all?page=2", {
  auth: {
    username : yourUsername,
    password : yourPassword
  }});
  res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error){
    res.status(404).send(error.message)
  }
});
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */


app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(API_URL + `/filter?score=5&apiKey=${yourAPIKey}`);
    res.render("index.ejs", {content: JSON.stringify(response.data)});

  } catch(error){
    res.status(404).send(error.message)
  }
  
});

const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}`}};
app.get("/bearerToken", async (req, res) => {
try{ 
  const response = await axios.get(API_URL + "/secrets/2", config );
    res.render("index.ejs", {content: JSON.stringify(response.data)})

} catch(error) {
  res.status(404).send(error.message)
}
  // axios.get(URL, {
  //   headers: { 
  //     Authorization: `Bearer <YOUR TOKEN HERE>` 
  //   },
  // });
  // */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
