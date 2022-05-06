// function outer(arg1){
//  let var1 = 10
//  let x = 5
 
//   function inner(arg2){
//    arguments //It is a keyword not a variable so cant be available via closures
//    let var2 = 20
//    let x = 30

//    console.log(arg1, var1, arg2, var2, x)
//    console.log(arguments[0])
//   }
//   return inner
// }

// let x = outer('parameter 1')

// //typeOf x == "function"

// x("parameter 2")
// document.getElementById("demo").innerHTML = 5 + 6 (This is will in client side)
// let a = "Piyush"
// console.log(a)

// const arr = ['cars', 'Police', 'Chor']
// console.log(arr[1])

// let x = 4
// let y = 45
// let z = x+y 
// console.log(z)

// let p = 56
// p += 6
// console.log(p)

// //making an object 
// let obj = {name:"Piyush", lastname:"Jha"}
// console.log(obj)

// let m = 12 + 4 + "Piyush"
// m = "Value Reassigned"
// console.log(m)

// console.log(typeof(5.0890))

// let x = myFunction(3, 6);
// console.log(x)
// function myFunction(a, b){
//   return a * b;
// }

// const car = {type:'Maruti Suzuki', model:"500", color:"White"}
// console.log(car.model)

// const fruits = ["Banana", "Apple", "Mango"]
// console.log(fruits.sort())
// console.log(fruits.reverse())

// const points = [40,70,85, 25, 10]
// points.forEach(myFunction)

// function myFunction(value, index ,array){
//   console.log(array)
// }

//map function 
// const number1 = [41, 25, 30, 89];
// const number2 = number1.map(myMapping)

// function myMapping(value, index , array){
//   value = value * 2;
//   console.log(value)
// }

// let date = new Date()
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// window.confirm("Press a Button!")

// let name = prompt("Enter the name", "Piyush Kumar Jha")

// if(name != ""){
//   console.log(name)
// }else{
//   console.log("NULL")
// }

//function for the factorial

// const a = parseInt(prompt("Enter the first number"))
// const b = parseInt(prompt("Enter the second number"))
// const c = parseInt(prompt("Enter the third number"))

// function greatest(a, b, c){
//   if(a>b && a>c){
//       return a;
//   }
//   else if(b>a && b>c){
//       return b;
//   }else{
//       return c;
//   }
// }
// console.log(factorial(a,b,c));

var a = prompt("Enter first string ") 
var b = prompt("Enter second string ")
document.write(a+b)
// console.log(a+b)