// Syntactical advantage

let name ='Jaggu'

console.log(`Hello, my name is ${name}`);


// Challenge area
// A 25% tip on $40 would be $10
function calculateTip(total, tippercent=.2){
    let tip = tippercent * 100
    let amount = total * tippercent
    return `A ${tip}% on $${total} would be $${amount}`
}

console.log(calculateTip(40,.25));