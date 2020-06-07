const account = {
    name : 'WellsFargo',
    Expenses : [],
    Income: [],
    addExpense : function(desc, amount){
        this.Expenses.push({  
            description : desc,
            amount : amount  
        })
    },
    addIncome : function(desc, amount){
        this.Income.push({
            description : desc,
            amount : amount
        })
    },

    getAccountSummary: function(){
        let sum = 0
        let inc = 0
        this.Expenses.forEach(function(expense){
            sum = sum + expense.amount
        })

        this.Income.forEach(function(income){
            inc = inc + income.amount
        })

        // return `${this.name} has $${sum} in expenses`
        return `${this.name} has a balance of $${inc - sum}. $${inc} in income and $${sum} in expenses`
    }
}


// Expense - description, amount
// addExpense - description, amount as arguments - add new object to expenses array
// getAccountSummary - total of all the expenses - Wellsfargo hass $1000 in expenses


// function addExpense(account, desc, amount){
//     account.Expenses[desc]=amount
// }



account.addExpense('Rent', 700)
account.addExpense('Car', 390.15)
account.addIncome('Job', 4500)
console.log(account);
console.log(account.getAccountSummary());


// Add Income array to account
// Add Income method as description and amount
// Update Account Summary -  Wellsfargo has a balance of $20. $100 in income and $80 in expenses

