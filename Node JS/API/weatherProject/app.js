//API integratin and Authentication using Postman
//404 -- Bad request
//401 -- Unauthorized
//403 -- Forbidden
//404 -- Not found
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


//Home route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "610bdeda6144cd5eb4ef6b591aba534e";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data); //parsing the data in the form of JSON
      //  const object = {
      //   name: "Piyush Jha",
      //   favouriteFood: "Maggie-Egg"
      // }
      //  console.log(JSON.stringify(object));
      const temp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;
      //icons
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temprature in the " +
          query +
          " is " +
          temp +
          "degrees Celcius.</h1>"
      );
      res.write("<p>The description of the weather is : " + weatherDesc);
      res.write("<img src=" + imageUrl + "/>");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is sarted on the port 3000");
});
