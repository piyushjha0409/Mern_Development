const express = require("express");
const bodyParser = require("body-parser");
//bodyParser -> By it we are able to pass the http request.
//urlencoded -> By it we can access formed data
const app = express();
//.use() function is used to mount the specified middleware(function that has access to the request object and response object) function
app.use(bodyParser.urlencoded({extended: true}));

//.get() function tells the server what to do when get requests at a given route//
app.get("/", function(req, res){
  // res.sendFile("index.html");
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function(req, res){

  // console.log(req.body.num1);

  // DRIVER CODE FOR LOGIC

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = Number(num1 + num2);

  res.send("The result of the calculation is " + result);

  // res.send("Thanks for using calculator!");
})

//New Route BMI calcualtor
app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
 var height = parseFloat(req.body.height);

 var bmi = parseFloat(weight/(height*height));

 res.send("Your BMI index is " + bmi);
})
app.listen(4000, function(){
  console.log("The server has started on port 4000")
});
//code will be on the production level soon
