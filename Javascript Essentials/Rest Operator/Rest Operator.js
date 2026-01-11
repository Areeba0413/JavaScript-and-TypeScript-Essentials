// rest parameters = (...rest) allow a function work with a variable number of arguments 
// by bundling them into an array spread = expands an array into separate elements
// rest = bundles separate elements into an array

//rest operator creates aray of incoming separate items
function openFridge(...foods){
  //  console.log(foods);
}

//rest operator creates aray of incoming separate items and spread operator again separates them
function openFridge(...foods){
  //  console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

//returning an array using rest operator
function getFood(...foods){
    return foods;
    //return [...foods]; //same result as above return statement 
}

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

