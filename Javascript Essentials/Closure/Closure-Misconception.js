//how to know if a function is closure does it has a return function everytime?

//A function does NOT need to return another function to be a closure.

//A closure is formed when a function accesses variables from its outer (lexical) scope, 
//even after that outer function has finished executing.

//function is a closure if it:
//Is defined inside another function or scope, and
//Uses variables from that outer scope
//Return is not mandatory.

//Closure WITH return (common case)
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn(); // 10

//Closure WITHOUT return
function outer() {
  let count = 0;

  setInterval(function () {
    count++;
    console.log(count);
  }, 1000);
}

outer();

//Event Listener Closure
function setup() {
  let clicks = 0;

  document.body.addEventListener("click", function () {
    clicks++;
    console.log(clicks);
  });
}

setup();

// ! IMPORTANT !
//A closure is a function that remembers and accesses variables from its lexical scope, 
// even when executed outside that scope.”

//Every function technically has access to its lexical scope
//But we call it a “closure” only when that access matters (variables are preserved)