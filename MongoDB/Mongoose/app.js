const mongoose = require('mongoose')

//connecting the to the database
mongoose.connect("mongodb://localhost:27017/PersonDB", { UseNewUrlParser: true});

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    Description: String
})

//creating a model
const Person = mongoose.model("Person", PersonSchema);


const Gauti = new Person({
    name: "Gautam Thareja",
    age: 19,
    Description: "Yaaro ka Yaar Jigri yaara party kraane mei tej"
})


const Shubhi = new Person({
    name: "Shubhangi",
    age: 19,
    Description: "Nice nice nice!.."
})


const Sid = new Person({
    name: "Sidharth Arora",
    age: 20,
    Description: "Khudai waala"
})


const piyush = new Person({
    name: "Piyush Jha",
    age: 19,
    Description: "I me myself"
})    



Person.insertMany([Gauti, Shubhi, Sid, piyush], function(err){
    if(err){
        console.log(err);
        console.log("Error Found in the database couldnt able to add it to the databases");
    }
    else{
        console.log("Succesfully added all the person details to the database!");
    }
});


// app.get('/allDataQuestionPaper',async function(req, res)
// {
//     await QuestionPaper.aggregate([
//         {$project : {
//         "_id":0,
//         "__v" : 0,
//         "courses._id" : 0,
//         "courses.semesters._id" : 0 , 
//         "courses.semesters.subjects._id": 0 , 
//         "courses.semesters.subjects.years._id":0,
//     }},

//     ], function(err,result)
//     {
//         if(!err)
//         {
//             res.send(result);
//         }
//         else
//         {
//             res.send("error");
//         }
//     })
    
// });

Person.aggregate([{
   
    $project : {
        "_id":0,
        "__v":0
    },
    
},

], function (err, result) {
    if (err){
        console.log(err);
    }
    else{
        console.log("AGGREGATED ||||||||||||||||||||||||||||");
        console.log(result);
    }
});


Person.aggregate([{
   
    $project : {
        "_id":0,
        "__v":0
    },
    
},
{$match:{"name":"Piyush Jha"}},
], function (err, result) {
    if (err){
        console.log(err);
    }
    else{
        console.log("FIND ||||||||||||||||||||||||||||");
        console.log(result);
    }
});
// Person.find(err, Sid){
// // if(err){
// //     console.log(err);
// //     console.log("Error found!");
// // }else{
// //     console.log(Person);
// // }
// };

//deletion of the database
// Person.deleteMany({}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted!")
//     }
// })

//Finding the databases 

// There is an error in  this whole part



// //closing the connections
// mongoose.connect.close();

//     person.forEach(function(Person){
//         console.log(Person.name);
// });
// }
// }
