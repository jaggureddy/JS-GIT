const player = 'Jaggu';
let experience = 100;
let wizardlevel = false;

if(experience > 90){
    let wizardlevel = true;
    // console.log('inside',wizardlevel);
}

// console.log('outside',wizardlevel);

function add(a,b){
    return a+b;
}

const add2 = (a,b) => a+b

// console.log(add(4,6));
// console.log(add2(5,7));

/*
function first() {
    var greet = "Hello"
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();
*/

const first = () =>{
    const greet = "Hi";
    const second = ()=>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran , the function executed. It's never going to be used again. But it's going to remember that there are references to those
// variables so the child scope always has access to the parent scope  

// Currying

const multiply = (a,b)=> a*b;
const curryMultiply = (a)=>(b)=>a*b;
const multiply5 = curryMultiply(5);

console.log(multiply(5,6));
console.log(curryMultiply(4)(6));
console.log(multiply5(7));

// compose

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num+1
const mul = (num) => num*4

compose(sum, mul)(6);

