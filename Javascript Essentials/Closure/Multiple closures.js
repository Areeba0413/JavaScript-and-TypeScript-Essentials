//Multipl Closures
//A single outer function can return multiple inner functions, each closing over the same 
// outer variable.
function createCounter() {
  let count = 0; // shared variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
