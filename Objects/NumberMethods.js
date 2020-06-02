let num = 9.943

// console.log(num.toFixed(2));
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

let max = 20
let min = 0
let randomNum = Math.floor(Math.random() * (max - min+1)) + min
console.log(randomNum);

// Challenge area 
// Guess input
// 1-5 - true if correct - false if in correct

function makeGuess(guess){
    let max = 5, min =1
    let randomNum = Math.floor(Math.random() * (max-min+1)) + min
    if(randomNum === guess)
        return 'Correct'
    else
        return 'Not Correct' 
}

console.log(makeGuess(2));
