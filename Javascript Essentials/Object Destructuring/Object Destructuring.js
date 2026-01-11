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

                                    //spread Operator usage

//separate address using spread operator
const addressCopy = { ...user.address };
console.log(addressCopy.city);    // New York
console.log(addressCopy.country); // USA

//Separate hobbies using spread operator
const hobbiesCopy = [...user.hobbies];
console.log(hobbiesCopy[0]); // reading
console.log(hobbiesCopy[1]); // coding

//Store each value in separate variables (using spread + indexing)
const [...hobbies] = user.hobbies;
const firstHobby = hobbies[0];
const secondHobby = hobbies[1];

console.log(firstHobby);  // reading
console.log(secondHobby); // coding

//Clean & Professional Way (spread + destructuring together)
const address = { ...user.address };
const hobbiess = [...user.hobbies];
//hobbiess[1] = "writing";
const { city, country } = address;
const [hobby1, hobby2] = hobbiess;

console.log(city, country, hobby1, hobby2);




