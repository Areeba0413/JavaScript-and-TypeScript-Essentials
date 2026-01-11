//combine multiple strings into array
function combineString(...strings){
    return (strings);
}

//separate elements using rest operator and join them using .join() function
function combineString(...strings){
    return strings.join(" ");
}

//using rest and spread operator together
function combineString(...strings){         //rest operator
    console.log(strings);                   //rest operator
    console.log(...strings);                //spread operator
}


let string1 = "I";
let string2 = "am";
let string3 = "a";
let string4 = "good";
let string5 = "student";

console.log(combineString(string1,string2,string3,string4,string5));