//Create a counter that accepts an initial value

function createCounter(value) {
  return function() {
    value+= 1;   
    return value;
  }
}  

const add = createCounter(3);
console.log(add());
console.log(add());
console.log(add());
console.log(add());
