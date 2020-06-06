const notes = ['Note1', 'Note2', 'Note3']

// console.log(notes.length);
// console.log(notes[notes.length-1]);

// push - add item to array
// pop  - removes an item from the end and returns the deleted value

// console.log(notes.pop());
// console.log(notes);
notes.push('New Note')
// console.log(notes);

// shift - remove item from beginning
// unshift - add item to beginning
// console.log(notes.shift())
// console.log(notes);

notes.unshift('New Note 2')
// console.log(notes);

// splice - add / remove item from given index

notes.splice(1,1)
// console.log(notes);

notes.splice(1,0,'Splice note 1')
// console.log(notes);

notes.splice(1,1,'Replace splice Note 2')
// console.log(notes);

// For each
    notes.forEach(function(element , index) {
        // console.log(`${index+1} . ${element}`);
        
    });

    // For Loop
    for(let count = 0 ; count<notes.length;count++){
        // console.log(`${count+1} . ${notes[count]}`);    
    }

// console.log(notes.indexOf('New Note 2'));


notes_objects = [
    {
        title: 'Title 1',
        note : 'Note 1'
    },
    {
        title: 'Title 2',
        note : 'Note 2'
    },
    {
        title: 'Title 3',
        note : 'Note 3'
    }
]

const index = notes_objects.findIndex(function(note,index){
    return note.title === 'Title 2'
})

// console.log(index);

const findNote = function(notes, noteTitle){
  
    const index = notes.findIndex(function(note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const findNote1 = function(notes, noteTitle){
    return notes.find(function(note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

console.log(findNote(notes_objects, 'Title 3'));
console.log(findNote1(notes_objects, 'Title 1'));
