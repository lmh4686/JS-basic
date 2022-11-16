const maxTemp = 23 // const define permanent value after the value can't change
console.log(maxTemp)
maxTemp = 1  // Error raised here because maxTemp is constant

x = 'Lee'                  //global variable. same as var not a good practice
{                          //Space and indentation not matter in js.
    console.log(x)        //{} Define code block
    console.log(3421)
}

{
  let  y = 'Jihyuk'           //let define local variable. Only can access in the same {}
}
console.log(y) // Because of let it won't work.

let a = 'egg'
{                          //Space and indentation not matter in js.
    console.log(a)        //{} Define code block
    console.log(3421)
}

let x = 'Apple, Banana, Orange'
console.log(x.length) //print length of x
console.log(x.indexOf('B')) //print index num of B. If character not found, return -1
console.log(x.slice(7,13)) //slice character from index 7 to 13(13 not including)
console.log(x.replace('a','---')) //change first 'a' character to '---'
console.log(x.replace(/a/g,'---')) //change all 'a' character to '---' 'g' stands for global
console.log(x.replaceAll('a','---')) //same as above simpler way.
console.log('Your fruits are: ' + x) // Cascading string
console.log(`Your fruits are: ${x}`) // Cascading string same principle of f string in python

console.log(9 / 2)
console.log(Math.floor(5 / 2)) // same as using '//' in Python
console.log(Math.floor(5 % 2)) // return remainder same as python method
console.log((0.1 + 0.2).toFixed(3)) // return only first 3 numbers
console.log((0.1 + 0.2).toPrecision(3)) // same as above


let x = 5
console.log(x)
x++     // increment by 1
x++
console.log(x)

console.log(++x) .   //pre increment by 1
console.log(x) 

console.log(x++) . // increment when it's called later.
console.log(x)

console.log(123 == 123) // Boolean value return true
console.log('123' == 123) // even different data type still true. It converts data type automatically
console.log('123' === 123) //BEST PRACTICE Tell js to not convert data type automatically

console.log('123' === 123)
console.log('Value: ' + x)  // x converted to string automatically
console.log('Value: ' + String(x))  // x converted to string manually

console.log(typeof x) //Show data type

x = {
    name: 'Lee',   //No need to use '' for key
    age: 27   
}
const field = 'age'
console.log(x[field]) //Use variable to call the value
console.log(x['name']) // Call name value
console.log(x.name) // Same as above simpler
console.log(x)


const x = [1, 2, 3, 3.14159, true, 'Hello'] // Can mix up multiple data types
// console.log(x[3]) //Same as Python to call elements by index number
// console.log(x.pop()) // Get the last value
console.log(x[x.length-2]) //call the second last element
console.log(x.includes(99)) // Check if 99 in x


// // Define a function
function add(x, y) {
    return x +y
}
console.log(add(10, 43))

// // Store a function as a variable
// //Rocket operator / fat hat
const add = (x, y) => {
    return x + y
}
// // This can be shorten it like below:
const add = (x, y) => x + y
console.log(add(10, 43))

const numbers = [12, 50, 44, 32, 2]
const add = (x, y) => x + y
const doubled = numbers.map(x => x * 2)
console.log(doubled)
 
const numbers = [12, 50, 44, 32, 2]
const add = (x, y) => x + y
const doubler = (arr) => arr.map(x => x * 2)
console.log(doubler(numbers))

const numbers = [12, 50, 44, 32, 2]
const Utils = {
    add: (x, y) => x + y,
    doubler: (arr) => arr.map(x => x * 2)
}
console.log(Utils.add(10, 43))
console.log(Utils.doubler(numbers))


const people = ['Matt', 'Glen', 'Mary', 'Kate']
const [first, second] = people 
console.log(first)
console.log(second)

const people = ['Matt', 'Glen', 'Mary', 'Kate']
const [, egg, spam] = people //',' skip the first element
console.log(egg)
console.log(spam)

const people = ['Matt', 'Glen', 'Mary', 'Kate']
const [egg, spam, ...others] = people //'...' indicates all left over elements
console.log(egg)
console.log(spam)
console.log(others)


const bobBirds = ['Robin', 'Crow']
const sallyBirds = ['Bluejay', 'Cardinal']
const allBirds = bobBirds.concat(sallyBirds)
console.log(allBirds)


const bobBirds = ['Robin', 'Crow']
const sallyBirds = ['Bluejay', 'Cardinal']
const allBirds = [...bobBirds, ...sallyBirds, 'Pigeon']
console.log(allBirds)


// // conditions need to be wrapped in ()
const age = 14
if (age >= 18) {
    console.log('Adult')
} else if (age >= 13) {
    console.log('Teen')
}else {
    console.log('Child')
}

const age = 14
const allowed = age >= 18 ? 'Allowed' : 'Not Allowed'
console.log(allowed)


const fav_bird = 'Crow'
switch (fav_bird) {
    case 'Raven':
    case 'Crow':
        console.log('You like crows or raven!')   //Without 'break' it will print out the next statement too
        break
    case 'Robin':
        console.log('You like robins!')
        break
    default:
        console.log('I don\'t know that bird!')  //if it's not match
}


let count = 3
while (count > 0) {
    console.log(count--)  //Subtract 1 each time of the loop
}

If i < 10 then loop, i increases by 1 after each loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//return all elements using 'of' in the array
const favFoods = ['pizza', 'pasta', 'tacos']
for (let food of favFoods) {
    console.log(food)
}

//return index of elements using 'in' in array
const favFoods = ['pizza', 'pasta', 'tacos'] 
for (let food in favFoods) {
    console.log(food)
}

//return both index and elements
const favFoods = ['pizza', 'pasta', 'tacos'] 
for (let index in favFoods) {
    console.log(`${parseInt(index)+1}. ${favFoods[index]}`)
}

// forEach return elements and index
const favFoods = ['pizza', 'pasta', 'tacos'] 
favFoods.forEach((food, index) => {
    console.log(`${index + 1}. ${food}`)
})

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const squared = arr.map(x => x ** 2)
console.log(squared)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const squared = arr.map(x => x ** 2)
const evens = arr.filter(x => x % 2 === 0) // Filter even numbers
console.log(evens)


