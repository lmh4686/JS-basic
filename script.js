// const maxTemp = 23 // const define permanent value after the value can't change
// console.log(maxTemp)
// maxTemp = 1  // Error raised here because maxTemp is constant

// x = 'Lee'                  //global variable. same as var not a good practice
// {                          //Space and indentation not matter in js.
//     console.log(x)        //{} Define code block
//     console.log(3421)
// }

// {
//   let  y = 'Jihyuk'           //let define local variable. Only can access in the same {}
// }
// console.log(y) // Because of let it won't work.

// let a = 'egg'
// {                          //Space and indentation not matter in js.
//     console.log(a)        //{} Define code block
//     console.log(3421)
// }

// let x = 'Apple, Banana, Orange'
// console.log(x.length) //print length of x
// console.log(x.indexOf('B')) //print index num of B. If character not found, return -1
// console.log(x.slice(7,13)) //slice character from index 7 to 13(13 not including)
// console.log(x.replace('a','---')) //change first 'a' character to '---'
// console.log(x.replace(/a/g,'---')) //change all 'a' character to '---' 'g' stands for global
// console.log(x.replaceAll('a','---')) //same as above simpler way.
// console.log('Your fruits are: ' + x) // Cascading string
// console.log(`Your fruits are: ${x}`) // Cascading string same principle of f string in python

// console.log(9 / 2)
// console.log(Math.floor(5 / 2)) // same as using '//' in Python
// console.log(Math.floor(5 % 2)) // return remainder same as python method
// console.log((0.1 + 0.2).toFixed(3)) // return only first 3 numbers
// console.log((0.1 + 0.2).toPrecision(3)) // same as above


// let x = 5
// console.log(x)
// x++     // increment by 1
// x++
// console.log(x)

// console.log(++x) .   //pre increment by 1
// console.log(x) 

// console.log(x++) . // increment when it's called later.
// console.log(x)

// console.log(123 == 123) // Boolean value return true
// console.log('123' == 123) // even different data type still true. It converts data type automatically
// console.log('123' === 123) //BEST PRACTICE Tell js to not convert data type automatically

// console.log('123' === 123)
// console.log('Value: ' + x)  // x converted to string automatically
// console.log('Value: ' + String(x))  // x converted to string manually

// console.log(typeof x) //Show data type

// x = {
//     name: 'Lee',   //No need to use '' for key
//     age: 27   
// }
// const field = 'age'
// console.log(x[field]) //Use variable to call the value
// console.log(x['name']) // Call name value
// console.log(x.name) // Same as above simpler
// console.log(x)


const x = [1, 2, 3, 3.14159, true, 'Hello'] // Can mix up multiple data types
// console.log(x[3]) //Same as Python to call elements by index number
// console.log(x.pop()) // Get the last value
console.log(x[x.length-2]) //call the second last element
console.log(x.includes(99)) // Check if 99 in x


//Define a function
// function add(x, y) {
//     return x +y
// }
// console.log(add(10, 43))


