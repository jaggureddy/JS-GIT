// Create array with five todos
// You have 5 todos
// Print first and second to last items -> Todo: todo1
const todo = ['Python', 'JavaScript', 'Eggplant', 'CypressIo', 'Postman']

// console.log(`You have ${todo.length} todo's`);
// console.log(`Todo: ${todo[todo.length-1]}`)
// console.log(`Todo: ${todo[todo.length-2]}`)


// Delete 3rd item

todo.splice(2,1)
// console.log(todo);

// Add New item onto the end
todo.push('ML')
// console.log(todo);

// Remove first item from list
todo.shift()
// console.log(todo);

// 1. first item
// 2. second item

// Using For each loop
todo.forEach(function(element , index) {
    console.log(`${index+1} . ${element}`);
    
});

// Using for loop
for(let count = 0 ; count<todo.length;count++){
    console.log(`${count+1} . ${todo[count]}`);    
}

