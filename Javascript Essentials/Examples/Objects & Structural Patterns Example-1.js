const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};

//Extract specific values using deep destructuring from given object.
//e.g. Extract name, city, and first hobby using destructuring

//const name1 = user.name; 
//console.log(name1);

const {name, address:{city},hobbies:[index1]} = user;
console.log(name, city, index1);


