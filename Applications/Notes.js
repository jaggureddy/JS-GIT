const notes = ['Note1', 'Note2', 'Note3']

// console.log(notes.length);
// console.log(notes[notes.length-1]);

// push - add item to array
// pop  - removes an item from the end and returns the deleted value

console.log(notes.pop());
console.log(notes);
notes.push('New Note')
console.log(notes);

// shift - remove item from beginning
// unshift - add item to beginning
console.log(notes.shift())
// console.log(notes);

notes.unshift('New Note 2')
// console.log(notes);

// splice - add / remove item from given index

notes.splice(1,1)
// console.log(notes);

notes.splice(1,0,'Splice note 1')
// console.log(notes);

notes.splice(1,1,'Replace splicce Note 2')
// console.log(notes);

// For each
    notes.forEach(function(element , index) {
        console.log(`${index+1} . ${element}`);
        
    });

    // For Loop
    for(let count = 0 ; count<notes.length;count++){
        console.log(`${count+1} . ${notes[count]}`);    
    }

    