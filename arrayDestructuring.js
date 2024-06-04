/** What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

The first console.log returns ‘8’ and the second returns ‘1846’.

What does the following code return/print?
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

The console.log will return the planetFacts object without the numPlanets item included.

What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

The first time you call the function it will return ‘Your name is Alejandro and you like purple’
And the second time will return ‘Your name is Melissa and you like undefined’

What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?
The first log will print ‘Maya’ the second will print ‘Marisa’ and the third will print ‘Chi’

What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?

The first log will print “Raindrops on roses” the second will print “whiskers on kittens” and the third will print an array containing “Bright copper kettles”, “warm woolen mittens” and “Brown paper packages tied up with strings”.

What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?
This will print an array with the values [0] = 10, [1] = 30, [2] = 20
Effectively swapping the positions of the values at index 2 and 3. **/

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

/* Write an ES2015 Version */
const obj = {numbers: {a: 1, b: 2}};
let {numbers: {a, b}} = obj;

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// Write a function called ***raceResults*** which accepts a single array argument. It should return an object with the keys ***first***, ***second***, ***third***, and ***rest***.

// - first: the first element in the array
// - second: the second element in the array
// - third: the third element in the array
// - rest: all other elements in the array

// **Write a *one line* function to make this work using**

// - An arrow function
// - Destructuring
// - `Enhanced` object assignment (same key/value shortcut)

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest: [...rest]});