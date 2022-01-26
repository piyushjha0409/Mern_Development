const express = require("express")

const app = express();

//home route
app.get("/", function(req, res){
  res.send("<h1>Hello Piyush this is your first server:)</h1>")
})
//contact route
app.get("/contact", function(req, res){
  res.send("Contact me: peeyush0409@gmail.com") 
})

//about route
app.get("/about", function(req, res){
  res.send("This is about me!")
})
//hobbies route
app.get("/hobbies", function(req, res){
  res.send("<ul>These are my hobbies<li>coffee</li>Thats it!</ul>")
})
app.listen(3000, function(){
  console.log("The server has started on port 3000")
});
