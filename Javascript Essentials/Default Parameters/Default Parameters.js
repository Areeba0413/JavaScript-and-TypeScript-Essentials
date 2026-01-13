//Default Parameters
// Value already defined of paramerters of the function so that if a value is not passed 
// for that parameter the compiler considers the already decided value.

//values passed as arguments
let weight = function(m,g){
    return m*g;
}
console.log(weight(10,9.8));

//default values assigned to parameters
let weight2 = function(m,g=9.8){
    return m*g;
}
console.log(weight2(10));

//default values can be assigned to many parameters but only to the right side.
let weight3 = function(m,g=9.8,a=1){
    return m*g*a;
}
console.log(weight3(10,10,2));

// Undefined parameters are always at the left and defined are always to the right otherwise 
// problem may occur. If all the parameters are defined then it can be started from left 
// very first parameter

let weight4 = function(m=10,g){
    return m*g;
}
console.log(weight4(2));  

//You call weight4(2)
//JavaScript assigns: m = 2, g = undefined (because you didn't pass a second argument)
//Calculation: 2 * undefined = NaN
//Result: NaN 