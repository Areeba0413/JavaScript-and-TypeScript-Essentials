/* 
    spread operator =  ... allows an iterable such as an array or string or object to be expanded 
    in to separate elements (unpacks the elements).
*/

                        //spread operator

let aaa = [1,2,3]; 
console.log(aaa); //prints same array
console.log(...aaa); //prints separated items of array
console.log([...aaa]); // prints same array
console.log({...aaa}); //prints the array elements as an object key-value pair

                        //Using spread operator on builtin functions

let maximum = Math.max(1,2,3,4);
console.log(maximum);

let numbers = [1,2,3,4];
console.log(...numbers);

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

                        //Using spread operator on string
let string = "Areeba";

//separating letters in string
console.log(...string);

//converting string into an array
let array = [...string];
console.log(array);

//joining separated letters into string
let joinLetters1 = array.join();
console.log(joinLetters1);

let joinLetters2 = [...string].join("-");
console.log(joinLetters2);

                        //Using spread operator on multiple arrays

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

let vegetables = ["carrots", "celery", "potatoes"];
console.log(vegetables);

//applying spread operator on an array ==> separates the array items
console.log(...fruits);

//applying spread operator on an array within an array ==> returns same array
console.log([...fruits]);

//combining two or more arrays in one array.
 let foods = [fruits, vegetables];
 console.log(foods);

//combining items of two or more arrays in one array using spread operator
console.log([...fruits, ...vegetables]);

//combining  more elements in the combined array
console.log([...fruits, ...vegetables, "fish", "chicken"]);

                        //Using spread operator with userdefined function

//a function to calculate the sumof 2 numbers
function sum(a,b){
    return a+b;
}

console.log(sum(3,4));

//but what if the data passed to the function did not matches with the data expected by function
//it wll show undefined

/* function sum(a,b){
    return a+b;
}

let unexpected_Data = [3,4];
console.log(sum(unexpected_Data));
*/

//thus using spread operator
function sum(a,b){
    return a+b;
}

let unexpected_Data1 = [3,4];
console.log(sum(...unexpected_Data1));


//give as much values as you want bust it will only consider first 2 values ignoring rest
function sum(a,b){
    return a+b;
}

let unexpected_Data2 = [3,4,5,6];
console.log(sum(...unexpected_Data2));

//when you are not sure how many values/arguments are going to come 
//then it mostly ca be array (which mostly requires loop to process it in a function

function Add(...args){
    console.log(...args);

    let summ =0;
    for(const arg of args){
        summ = summ + arg;
    }
    return summ;
}

console.log(Add(2,3,4,5,6));
console.log(Add(2,3,4,5,6, 8,9,8));
let temp = [10,20,30,40,50,60,80];
console.log(Add(...temp));

//applying spread operator but not on all values of array
function Addition(a,b, ...args){
    console.log(a,b);
    let product = a*b;
    console.log(...args);

    let summ =0;
    for(const arg of args){
        summ = summ + arg;
    }
    return [summ, product];
}

console.log(Addition(2,3,1,1,1));
