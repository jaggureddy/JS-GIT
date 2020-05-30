// Lexical scope - static scope
// Global Scope - defined outside of all code blocks
// Local scope - defined inside a code block

// In a scope we can access variables defined in that scope or any parent/ancestor variables


let var1 = 'Var1 global'

if(true){
    let var1 = 'Var1 local'
    if(true){
        var1 = 'Var1 updated'
        console.log(var1);
    }
    console.log(var1);    
}


console.log(var1);
