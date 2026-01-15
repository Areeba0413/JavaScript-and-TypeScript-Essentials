//Closure with Private Variables

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
