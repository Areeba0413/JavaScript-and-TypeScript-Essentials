//When using var in loops, all closures share the same variable, which can lead to 
// unexpected results as var is function scoped and all functions share the same i

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//Using let (block scope)
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
