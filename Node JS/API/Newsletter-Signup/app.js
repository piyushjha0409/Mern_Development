//Task: You have to take the input from signUp form and print in the server by bodyParser

const express = require("express");
const bodyParser = require("body-parser");
const https = require("request");

const app =  express();

app.use(bodyParser.urlencoded({extended: true}));

//for using static files like css and images we have to do like this
app.use(express.static("public"));

//Home route
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

//taking the client input
app.post("/", function(req, res){

 var FirstName = req.body.FirstName
 var LastName = req.body.LastName
 var Email = req.body.email
// printing the data
console.log(FirstName)
console.log(LastName)
console.log(Email)
})

if(response.statusCode === 200){
  res.send("Succesfully Subscribed!");
}else{
  res.send("There was an error with signing up. please try again later!");
}
app.listen(3000, function(){
 console.log("Server is running on the port of 3000");
})
