let em ={
    name: 'Jaggu',
    age: 28,
    Company: 'Bed Bath and Beyond'
}

let em1 ={
    name: 'Reddy',
    age: 28,
    Company: 'USAA'
}

function summary(emp){
    return{
        summ: `${emp.name} is ${emp.age}`,
        work: `${emp.name} works at ${emp.Company}`
    }
}

// console.log(summary(em).summ);
// console.log(summary(em).work);
// console.log(summary(em1).summ);
// console.log(summary(em1).work);



// challenge area
// Take farenheit and return F, C, K

function conversion(far){
    let celsius = (far - 32) * (5/9)
    let kelvin = (far + 459.67) * 5 / 9
    return{
        F : far,
        C : celsius,
        K : kelvin
    }
}

console.log(conversion(83));

