function outer(arg1){
 let var1 = 10
 let x = 5
 
  function inner(arg2){
   arguments //It is a keyword not a variable so cant be available via closures
   let var2 = 20
   let x = 30

   console.log(arg1, var1, arg2, var2, x)
   console.log(arguments[0])
  }
  return inner
}

let x = outer('parameter 1')

//typeOf x == "function"

x("parameter 2")