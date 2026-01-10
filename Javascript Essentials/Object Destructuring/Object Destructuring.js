const user = {
  name: "John",
  lastname: "hoodson",
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};

//accessing object
console.log(user.name); //accessing name in object
console.log(user.address); //accessing address in object
console.log(user.address.country); //accessing country in address property
console.log(user.hobbies);//accessing hobbies in object
console.log(user.hobbies[0]);//accessing item in hobbies array in object

//changing property values in an object.
//console.log([...user]); //will generate error wrong sytax
console.log({...user}); //printing whole object
console.log({...user, name: "Sara"}); //changing value of property in an object.
console.log({...user, lastname: "Adam"}); //changing value of property in an object.
console.log({...user, name: "Sara"}); //changing value of property in an object.
console.log({...user, address: {...user.address,city:"Alaska"}}); //changing value of property in an object.
console.log({...user, hobbies: ["reading","writing"]});

//converting object into array using object.entries

//using loop
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});

//using spread operator
const entries = Object.entries(user);
console.log(entries);
let newEntries = [...entries];
console.log(newEntries);
let [a,b,c,d] = newEntries;
console.log(a,b,c,d);
console.log(...a, ...b, ...c, ...d);

