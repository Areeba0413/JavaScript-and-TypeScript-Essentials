//Closure with Private Variables
//A variable is private if only the function where it is defined (and its inner functions) 
// can access it.
//Variables declared inside a function cannot be accessed from outside that function.
//You cannot access any of these variables directly from outside that’s why we call them private

function bankAccount() {
  let balance = 1000; //Private Variable-Only accessible through closures

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    }
  };
}

const account = bankAccount();
account.deposit(500);
account.withdraw(300);
