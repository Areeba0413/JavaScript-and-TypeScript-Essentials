//Challenge # 02: 
// Convert this function into an arrow function and use template literals inside it:

/*function getFullAddress(user) {
  return user.street + ", " + user.city + " (" + user.zip + ")";
}

const user = {
  street: "Baker St",
  city: "London",
  zip: "NW1"
};
console.log(getFullAddress(user));
//Output: Baker St, London (NW1)
*/

//using Arrow Function

const getFullAddress= (user) => {
  return `${user.street}, ${user.city} (${user.zip})`;
}

const user = {
  street: "Baker St",
  city: "London",
  zip: "NW1"
};

console.log(getFullAddress(user));