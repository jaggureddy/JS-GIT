// Create array with five todos
// You have 5 todos
// Print first and second to last items -> Todo: todo1
// const todo = ['Python', 'JavaScript', 'Eggplant', 'CypressIo', 'Postman']

// console.log(`You have ${todo.length} todo's`);
// console.log(`Todo: ${todo[todo.length-1]}`)
// console.log(`Todo: ${todo[todo.length-2]}`)


// Delete 3rd item

// todo.splice(2,1)
// console.log(todo);

// Add New item onto the end
// todo.push('ML')
// console.log(todo);

// Remove first item from list
// todo.shift()
// console.log(todo);

// 1. first item
// 2. second item

// Using For each loop
// todo.forEach(function(element , index) {
//     console.log(`${index+1} . ${element}`);
    
// });

// Using for loop
// for(let count = 0 ; count<todo.length;count++){
//     console.log(`${count+1} . ${todo[count]}`);    
// }


// 1. Convert array into array of objects - text, completed
// 2. Create function to remove a todo by text value

const todo = [
    {
        item: 'Python',
        completed : false//50
    },

    {
        item: 'JavaScript',
        completed : false //5
    },

    {
        item: 'EggPlant',
        completed : false//1
    },

    {
        item: 'CypressIO',
        completed : false//5
    },

    
    {
        item: 'Selenium',
        completed : true//5
    },

    {
        item: 'PostMan',
        completed : false//15
    },
    
    {
        item: 'Java',
        completed : true

    }
]

const getIndex = function(todos, text){
    const index = todos.findIndex(function(todo,index){
        return todo.item.toLowerCase() === text.toLowerCase()
    })
    return index
}


function deleteToDo(todos, text){
    const index = getIndex(todos, text)
    console.log(index);
    
    if(index > -1)
        todos.splice(index,1)

}

// deleteToDo(todo, 'Java')

// console.log(todo);


function filterTodo(todos, percent){
    return todos.filter(function(todo, index){
        return todo.completed >= percent 
    })
}

function filterTodo(todos){
    return todos.filter(function(todo, index){
        return !todo.completed 
    })
}


// console.log(filterTodo(todo, 5));
// console.log(filterTodo(todo));

function sortTodo(todos){
    return todos.sort(function(todo1, todo2){
        if(!todo1.completed && todo2.completed)
            return -1
        else if(todo1.completed && !todo2.completed) 
            return 1
        else 
            return 0
    })
}

console.log(sortTodo(todo));
