function Average(...numbers){

    let result = 0;
    for(let number of numbers){
        result = result + number;
    }
    return result/numbers.length;
}

const total = Average(10,20,30,40,50);
console.log(total);