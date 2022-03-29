const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//intitiating the array named as items
var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

//connecting to the mongoose databases 
mongoose.connect("mongodb://localhost:27017/todolistDB");

//creating the schema
const itemSchema = new mongoose.Schema({
  name: String
})

//creating the model
const Item = mongoose.model("item", itemSchema);

const item1 = new Item({
  name: "Welcome to your todoList"
});

const item2 = new Item({
  name: "Hit the + button to add the new item."
});

const item3 = new Item({
  name: "<-- hit this to Delete an Item"
});

const defaultItems = [item1, item2, item3]


// Deleting the database
Item.deleteMany({}, function(err){
  if(err){
      console.log(err);
  }else{
      console.log("Successfully deleted the items!")
  }
});

app.get("/", function(req, res){
  // res.send("Hello");
  //Logic: Driver code
  var today = new Date();

  var options ={
    weekday : "long",
    day: "numeric",
    month: "long"
  };

  //Reading the database 
  Item.find({}, function(err, foundItems){

    if(foundItems.length === 0){
    //Inserting into the database
    Item.insertMany(defaultItems, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Successfully saved defualt items to DB")
    }
    });
      res.redirect("/");
    }else{
      res.render("list", {listTitle: "Today", item: foundItems});
    }
 
  })

  var day = today.toLocaleDateString("en-US", options);

});

app.post("/", function(req, res){
 const itemName = req.body.newItem;

 const item = new Item({
   name: itemName
 });

 //saving the items to the collection
 item.save();
  res.redirect("/");
})

app.post("/delete", function(req, res){
  const checkedItem = req.body.checkbox;

  Item.findByIdAndRemove(checkedItem, function(err){
    if(!err){
      console.log("Succesfully deleted the checked item");
      res.redirect("")
    }
  });
});

app.listen(3000, function(){
  console.log("The server is running on port 3000");
})
