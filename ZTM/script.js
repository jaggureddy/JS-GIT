/* var db = [
    {
        username : 'Jaggu',
        password : 'Jaggu'  
    }
];

var newsfeed = [
    {
        user : 'User 1',
        feed : 'Feed 1'
    },
    {
        user : 'User 2',
        feed : 'Feed 2'
    }
];

var usernamePrompt = prompt('Enter username');
var passwordPrompt = prompt('Enter Password');

function signIn(user, pass){
    if(user === db[0].username && pass === db[0].password){
        console.log(newsfeed)
    }else{
        alert('Wrong User / Pass')
    }
}

signIn(usernamePrompt, passwordPrompt)

*/

var todos = [
    'todo 1',
    'todo 2',
    'todo 3',
    'todo 4',
    'todo 5'
];

for (var i = 0; i< todos.length; i++){
    console.log(todos[i] + '!')
}

todos.forEach(function(todo, i){
    console.log(todo, i)
})