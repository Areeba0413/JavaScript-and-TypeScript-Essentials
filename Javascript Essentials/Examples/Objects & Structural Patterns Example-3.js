const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};

//Create a new object using spread operator & change one property.
//e.g. Create a new user object with updated city using spread operator.

const newUser = {...user, address: {...user.address, city:"California",}};
console.log(newUser);


