const express = require("express");
const app = express();

app.use(express.json()); // middleware to parse JSON request bodies

app.get("/", (request, response) => {

    response.json({
        message: "Hello, world!"
    });
});

app.post("/post-test", (request, response) => {
    console.log("we got this data:" + request.body);


    response.json({
        receivedData: request.body
    });
});  


let PORT = process.env.PORT || 3000; 

//epxort the configured server
module.exports = {
    app,
    PORT: PORT
};



