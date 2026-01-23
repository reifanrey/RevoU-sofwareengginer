let todos = [];

const form = document.getElementById('todo-Form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});

function renderTodo(){
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    if (todos.length === 0) {
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 4 ;
        cell.textContent = 'No task found';
        cell.className = 'empty' ;
        return;
    }

    todos.forEach((item, index)=> {
        const row = tbody.insertRow();
        row.insertCell().textContent = item.todo;
        row.insertCell().textContent = item.date;
        row.insertCell().textContent = item.status;

        const actionCell = row.insertCell();
        const btn = document.createElement('button');
        btn.textContent = 'Done';
        btn.onclick = function() {
            todos[index].status = 'Done';
            renderTodo();
        };
        actionCell.appendChild(btn);
    });
}

function addTodo() {
    const todoText = document.getElementById('todoText').value;
    const todoDate = document.getElementById('todoDate').value;

    const newTodo = {
        todo: todoText,
        date: todoDate,
        status: 'pending'
    };

    todos.push(newTodo);
    renderTodo();
    console.log('Todo added:', todos);

    document.getElementById('todoText').value = '';
    document.getElementById('todoDate').value = '';
}

function deleteAllTodo() {
    todos = []
    renderTodo()
}
const deleteAllBtn = document.getElementById('deleteAllBtn');

deleteAllBtn.addEventListener('click', function(){
    deleteAllTodo()
})

function filterTodo() {
    const filterStatus = document.getElementById('filter-Status').value
    let filtered = todos
    filtered = filtered.filter(item => { 
        return filterStatus === '' || item.status === filterStatus
    })
    renderTodoFiltered(filtered)
}

document.getElementById('filter-Btn').addEventListener('click', function() {
    filterTodo()
})
function renderTodoFiltered(list) {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    if (list.length === 0) {
        const row = tbody.insertRow()
        const cell = row.insertCell()
        cell.colSpan = 4
        cell.textContent = 'No task found'
        cell.className = 'empty'
        return
    }
    list.forEach(item => {
        const row = tbody.insertRow()
        row.insertCell().textContent = item.todo
        row.insertCell().textContent = item.date
        row.insertCell().textContent = item.status

        const actionCell = row.insertCell()
        const btn = document.createElement('button')
        btn.textContent = 'Done'
        actionCell.appendChild(btn)
    })
}

