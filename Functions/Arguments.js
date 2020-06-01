// Multiple arguments
let add = function(a, b, c){
    return a+b+c
}

let res = add(10,1,3);
console.log(res);

// Default arguments
function defaultargs(name='Jaggu', score=0){
    return name +'-'+score
}

console.log(defaultargs('Reddy',100));

// Challenge area
function calculateTip(total, tippercent=.2){
    return total +(total*tippercent)
}

console.log(calculateTip(100,.25));
