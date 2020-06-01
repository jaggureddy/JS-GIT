// Global scope - conversion
// Local scope - far, celsius


function conversion(far){
    let celsius = (far - 32) * (5/9)
    return celsius;
}

console.log(conversion(32));
console.log(conversion(68));