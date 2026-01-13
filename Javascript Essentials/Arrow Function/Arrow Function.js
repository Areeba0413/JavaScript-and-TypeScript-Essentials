// arrow function - a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code

//Normal syntax of a function
function hello(){
    console.log("Hello");
}
hello();

//function stored in const variable
const hello = function(){
    console.log("Hello");
}
hello();

//using arrow function
const hello = () => console.log("Hello");
hello();

//passing value to the parameter of arrow function
const hello = (name) => console.log(`Hello ${name}`);
hello("Bro");

const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};
hello("Bro", 25);

//callback function
setTimeout(hello, 3000);

function hello(){
    console.log("Hello");
}

//function expression as argument of builtin function
setTimeout(function hello(){
    console.log("Hello");
}, 3000);

//function expression doesnot need name so it can also be written as
setTimeout(function(){
    console.log("Hello");
}, 3000);

//more concised arrow functions
setTimeout(() => console.log("Hello"), 3000);

//using arrow function with Map, filter and reduce function
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);