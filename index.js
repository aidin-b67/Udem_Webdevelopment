
import https from "https";

app.get("/", (res,req) =>{
    const options = {
        hostname:"bored-api.appbrewery.com",
        path : "/random",
        method: "get",
    };
    const request = https.request(options, (response) => {
        let data = ""
        response.on("data", (chunck) =>{
            data +=chunck
        });
        response.on("end", () => {
            try {
                const result = JSON.parse(data);
                res.render("index.js", {activity:data})
            } catch(error) {
                console.error("failed to parse response" + error.message);
                res.stats(500).send("failed to fetch the activity. Please try again!")
            }
        }