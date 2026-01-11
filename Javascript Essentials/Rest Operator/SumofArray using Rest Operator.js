function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(10,20,30,40,50);
console.log(total);