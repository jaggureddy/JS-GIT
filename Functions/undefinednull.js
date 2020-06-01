// Undefined for variable
// Undefined for function arguments
// Undefined as function return default value
// Null as assigned value

let name

console.log(name);

let cost = function(num){
    console.log(num);
}

let res = cost()
console.log(res);

function cost1(num){
    return num
}

console.log(cost1());


let n =  28

// n = undefined
n = null
console.log(n);


