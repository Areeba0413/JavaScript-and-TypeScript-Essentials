const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};

//Convert an object into an array using Object.entries.
//e.g. Convert the user object to an array of [key, value] pairs

const entries = Object.entries(user);
console.log(entries);



