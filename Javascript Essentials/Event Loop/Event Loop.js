/*
Event Loop:
JavaScript executes code synchronously in a single thread. However, it can handle asynchronous operations such as fetching data from an API, handling user events, or setting timeouts without pausing execution. This is made possible by the event loop.
JavaScript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.
JavaScript is Single-Threaded 
JavaScript can do one task at a time.
It finishes the current task before starting the next one.

Synchronous Operations
Tasks run one after another in order.
Each task waits for the previous one to finish.

Asynchronous Operations
Some tasks take time (like timers or API calls).
JavaScript does not wait for them and continues with other work.

How the Event Loop Works
The event loop continuously checks whether the call stack is empty and whether there are pending tasks in the callback queue.
•	Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.
•	Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, ajax-requests and other non-blocking operations.
•	Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.
•	Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.
•	Blocking: Code that is slow and taking time to execute.


*/

                                                //Example #1

//Goes to callstack -> then move to webapis as it Asynchronous operation
//wait there for 2secs and then move to callback queue
setTimeout(function timer() {
    console.log('You clicked the button!'); //appears 3rd on screen
}, 2000);

//goes to callstack -> executed -> displayed on terminal
console.log("Hi!"); //appears 1st on screen

//Goes to callstack -> then move to webapis as it Asynchronous operation
//wait there for 5secs and then move to callback queue
setTimeout(function timeout() {
    console.log("Click the button!"); //appears 4th on screen
}, 5000);

//goes to callstack -> executed -> displayed on terminal
console.log("Welcome to loupe."); //appears 2nd on screen

                                                //Example #2

//blocking
/*
function foo(){
    return foo();  //infinite loop calling
}

foo();
*/

                                                //Example #3

//how callbacks works?

console.log('Hi');          //prints Hi //1st

//Asynch callback
setTimeout(function t() {   //move to webapis from callstack to process for 5secs then move to callback stack
  console.log('There');     // prints there //3rd
}, 5000);

console.log('JSConfEU');    //print JSConfEU //2nd

                                                //Example #4

//when time is zero but it still goes to webapis to process then goes into callback queues
//and then callstack execution
//zero is the minimum time taken by function after which the function is executed.

console.log('Hi');

setTimeout(function cb() {
  console.log('cb');
}, 0);

console.log('JSConfEU');

                                                //Example #5

//timeout gets queued
//each queue might take more than 1sec in callback queue  due to more callback requests in the queue
//as 1sec is minimum time after which it will appear. 

setTimeout(function timeout() {     //queued 1st -> moved to webspis
  console.log('hi');                //prints Hi //1st
}, 1000);

setTimeout(function timeout() {     //queued 2nd -> moved to webspis
  console.log('hi');                //print Hi //2nd
}, 1000);

setTimeout(function timeout() {     //queued 3rd -> moved to webspis
  console.log('hi');                // print Hi //3rd
}, 1000);

setTimeout(function timeout() {     //queued 4th -> moved to webspis
  console.log('hi');                //prints Hi //4th
}, 1000);

                                                //Example #6
//what is Blocking event loop?
//putting a slow code on synchronous operations which is processed on callstack fora long time
//browser repaints/loads screen very quickly every 16millisecs to render elements on screen (render queue)
//but if callstack is processing slowed/delayed code then render gets blocked and you cannot click or 
// do anything onscreen

// Synchronous
[1,2,3,4].forEach(function (i) {
  console.log('processing sync');
  delay();                          //doing slow processing in each element on the array
});

// Asynchronous
function asyncForEach(array, cb) {
  array.forEach(function () {
    setTimeout(cb, 0);
  })
}

asyncForEach([1,2,3,4], function (i) {
  console.log("processing async", i);
  delay();
})

                                                //Example #7

//Flooding the queue

 //scroll event triggered every 16ms when scrolled, thus alot of requests gets into wepapis and then flood
 //callback queue and keep busy the callstack in executing each if delay is applied which takes time 

// Async forEach (same as before)
asyncForEach([1,2,3,4], function (i) {
  console.log("processing async", i);
  delay();
});

// Native JavaScript event listener (instead of jQuery)
document.addEventListener('scroll', animateSomething);     