// Synchronous programming
//Tasks run one after another in order.
//Each task waits for the previous one to finish.

let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");

//Asynchronous Operations
//Some tasks take time (like timers or API calls).
//JavaScript does not wait for them and continues with other work.

console.log("Start");       //prints start //1st

setTimeout(function() {     //runs but throughs onto webapis from callstack for 3sec then to task queue
  console.log("Hey I am good"); //prints hey... //3rd
}, 3000);

console.log("End");         //prints end //2nd