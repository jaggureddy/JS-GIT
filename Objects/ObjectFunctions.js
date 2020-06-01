let wells ={
    name : 'Wells',
    inc : 75,
    bal : 0,
    checkExp: function(am){
        let exp = this.inc - this.bal;
        return am <= exp
    }
}


let addBal = function(account,amount){
    account.bal = amount
}

function reduceBal(account, amount){
    account.bal -= amount
}

addBal(wells,72)
console.log(wells.checkExp(4));
reduceBal(wells,5)
console.log(wells.checkExp(4));
