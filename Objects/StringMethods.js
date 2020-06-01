// MDN javascript documentation

let name = 'Jagadeeswara Reddy'

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.includes('Reddy'));
console.log(name.trim());


// Challenge area

// is ValidPassword
// length is more than 8 and doesnot contain word password


function isValidPassword(str){
    return str.length >8 && !str.includes('password')
}

console.log(isValidPassword('asdfg'));
console.log(isValidPassword('abc123!asdadsasd'));
console.log(isValidPassword('asdfgpassword'));

