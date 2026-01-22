
let todos = [];

const form = document.getElementById('todo-Form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = document.getElementById('todoText').value;
    const todoDate = document.getElementById('todoDate').value;

    const newTodo = {
        todo: todoText,
        date: todoDate,
        status: 'pending'
    };

    todos.push(newTodo);
    console.log('Todo added:', todos);

    document.getElementById('todoText').value = '';
    document.getElementById('todoDate').value = '';
}




function deleteAllTodo() {

}
function filterTodo() {

}

