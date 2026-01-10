//Destructuring is used to unpack values from an aray or properties of objects into 
// distinct varaibles

//destructuring (SYNTAX #1)
// 3 is assigned to a i.e a=3 and 5 is assigned to b i.e b=5
let array = [3,5];
let [a,b] = array;

//it can also be done as (SYNTAX #2)
let a2 = array[0];
let b2 = array[1];

//destructuring
let array1 = [10,20,30,40,50,60,70,80,90];
let [w,x,y,z, ...rest] = array1;
console.log(w,x,y,z, rest); //separating 10, 20, 30, 40 and [rest]
console.log(w,x,y,z, ...rest); //spread operator

//destructuring specific elements
let [ , p, q, , , ...restt]= array1; // ignore 10, 40, 50 assign p=20, q=30, restt
console.log(p,q,restt);

//destructuring (SYNTAX #3)
let {m,n}={m:100,n:200};

