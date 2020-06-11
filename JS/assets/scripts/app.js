const defaultRes = 0
let currentResult = defaultRes;


// currentResult = (currentResult + 10) * 3 / 2 - 1;

// function descriptionn(operator, initialResult, enteredNumber){
//     const desc = `${initialResult} ${operator} ${enteredNumber}`

// }


function add(){
    const desc = `${currentResult} + ${userInput.value}`
    currentResult += parseInt(userInput.value)
    outputResult(currentResult,desc);
}

function sub(){
    const desc = `${currentResult} - ${userInput.value}`
    currentResult -= parseInt(userInput.value)
    outputResult(currentResult,desc);
}

function mul(){
    const desc = `${currentResult} * ${userInput.value}`
    currentResult *= parseInt(userInput.value)
    outputResult(currentResult,desc);
}

function div(){
    const desc = `${currentResult} / ${userInput.value}`
    currentResult /= parseInt(userInput.value)
    outputResult(currentResult,desc);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', sub)
multiplyBtn.addEventListener('click', mul)
divideBtn.addEventListener('click', div)