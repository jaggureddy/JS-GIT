// Function - input, code, output

let greeting = function(){
    console.log('Hello');
}

function greet(){
    console.log('Hello2');
}

greeting();


let square = function(num){
   let result = num * num;
   return result
}


console.log(square(5));


// convert farenheit to celsius

function conversion(far){
    let celsius = (far - 32) * (5/9)
    return celsius;
}

console.log(conversion(32));
console.log(conversion(68));

