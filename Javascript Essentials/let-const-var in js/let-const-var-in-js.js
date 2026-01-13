//const vs let vs var

                            // const - for values that never change

const Pi = 3.14
// Pi = 1 //error
//console.log(Pi);

//But const if used with an object then its property values can be changed.

const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};
user.name = "Sara"
console.log(user);

                            // let - for block-level variables

//Can not be used before defining/declaring it
// console.log(i) //error

//Block scoped- used inside the block cannot be used outside the block 
for(let i = 0; i < 3; i++) {
  //console.log(i);
}

//Can not be redeclared and redefined outside the block..
// console.log(i) //error


                            // var - for variables available to entire function or program

//Can be used before defining/declaring it.
console.log(j); //prints undefined-means the j is declared but not defined.

for(var j = 0; j < 3; j++) {
  console.log(j);
}

//Function scoped- works outside the block as well if declared inside the block.
console.log(j)

//Can be redeclared and redefined. (Overrides values)
var student = "Sara";
console.log(student);

student="Sana";
console.log(student);
