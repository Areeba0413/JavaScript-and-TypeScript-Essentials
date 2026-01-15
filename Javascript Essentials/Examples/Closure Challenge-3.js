//Create a counter that can be reset
function createCounter() {
    let counter = 0;
    return {
        Counterfunc: function () {
            counter += 1;
            return counter;
        },

        Resetfunc: function (){
            counter=0;
            return counter;

        }

    }
}

const counter = createCounter(3);
console.log(counter.Counterfunc());
console.log(counter.Counterfunc());
console.log(counter.Counterfunc());
console.log(counter.Resetfunc());
console.log(counter.Counterfunc());
console.log(counter.Counterfunc());
console.log(counter.Resetfunc());