//Practical Example

function createBankAccount(initialBalance) {
  let balance = initialBalance;  // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited ${amount}. New balance: ${balance}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${balance}`);
      } else {
        console.log("Insufficient funds!");
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);   // Deposited 50. New balance: 150
myAccount.withdraw(30);  // Withdrew 30. New balance: 120
console.log(myAccount.getBalance());  // 120
