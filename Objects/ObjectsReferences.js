let wells ={
    name : 'Wells',
    inc : 0,
    exp : 0
}

let addExpense = function(account, amount){
    account.exp += amount
    // console.log(account);
    
}

// addExpense(wells,100)
// console.log(wells);

// Add Income
function addIncome(account, amount){
    account.inc += amount
} 

// ResetAccount
function resetAccount(account){
    account.inc = 0
    account.exp = 0
}

// get Account summary
// Account for Jaggu has $900 in balance, $ 1600 in income $700 in expense

let summary = function(account){
    return `Account for ${account.name} has $${account.inc - account.exp} in balance, $${account.inc} in income $${account.exp} in expense`
}
addIncome(wells, 100)
addIncome(wells, 1000)
addIncome(wells, 1200)
addExpense(wells,1000)
console.log(summary(wells));
resetAccount(wells)
console.log(summary(wells));

