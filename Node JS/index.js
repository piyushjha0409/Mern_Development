// const fs = require("fs");
//
// //copying the content of the file 1 in the file 2.
// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");

var mySuperheroName = superheroes.random();

//printing the superhero name
console.log(mySuperheroName);

var supervillains = require("supervillains");

var mySupervillainsName = supervillains.random();

//printing the name of the super supervillains
console.log(mySupervillainsName);
