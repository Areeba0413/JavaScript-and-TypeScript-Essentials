//Local Variable
//A local variable is a "private" variable defined inside a function. 
//It can only be used inside the function where it is defined. It is private and hidden 
//from other functions and other scripting code and cannot be changed by other scripting code.

//Global Variable
//A global variable is a "public" variable defined outside a function. 
//In a web page, global variables belong to the page.
//Global variables can be used (or changed) by all scripts in the page.
//Undeclared variables (created without a keyword var, let, const), are always global, 
//even if they are created inside a function.

//Variable Lifetime
//Global variables live until the page is discarded, like when you navigate to another page or 
//close the window.

//Local variables have short lives. They are created when the function is invoked, 
//and deleted when the function is finished.

                                //Closure
//A closure is when a function "remembers" variables from its outer scope, 
// even after the outer function has finished executing.

//A closure is a function that has access to the parent scope, after the parent function 
// has closed.

//closures used to:
//Create private variables
//Preserve state between function calls

                                //Counter Function using closure

//Why doesn’t counter get destroyed?
//Normally: When a function finishes → its execution context is destroyed
//Exception: closures

function createCounter() {
  let counter = 0;  // ← This would normally be destroyed...
  
  return function() {
    counter += 1;    // ← But it's kept alive because this function needs it!
    return counter;
  }
}  // ← Function ends, but counter survives!

const add = createCounter();
// counter is "trapped" inside the returned function
// It can't be accessed directly, but add() can use it.

                    //Multiple counters can be created by declaring new variables

const add1 = createCounter();  // createCounter() runs - creates counter1
const add2 = createCounter();  // createCounter() runs AGAIN - creates counter2

console.log(add1());  // 1 (counter1 = 1)
console.log(add1());  // 2 (counter1 = 2)
console.log(add2());  // 1 (counter2 = 1) - Different counter!
console.log(add1());  // 3 (counter1 = 3)
console.log(add2());  // 2 (counter2 = 2) - Independent!

/*         
Lexical Scope
Where a function can access variables, determined by where the function is written in the code.

Lexical Environment:
The actual memory/storage structure that stores variables, functions, and their scopes.
•	Every function has a lexical environment
•	Contains:
o	Its own variables
o	Reference to outer environment (parent scope)
*/