const todoText = document.getElementById("todoText");
const todoDate = document.getElementById("todoDate");
const addBtn = document.getElementById("addBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const filterBtn = document.getElementById("filterBtn");
const filterDate = document.getElementById("filterDate");
const filterStatus = document.getElementById("filterStatus");
const tbody = document.getElementById("todoBody");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

render(todos);

addBtn.onclick = () => {
  const text = todoText.value.trim();
  const date = todoDate.value;
  if (!text || !date) return;
  todos.push({ text, date, status: "Pending" });
  save();
  render(todos);
  todoText.value = "";
  todoDate.value = "";
};

deleteAllBtn.onclick = () => {
  todos = [];
  save();
  render(todos);
};

filterBtn.onclick = () => {
  let filtered = [...todos];
  if (filterDate.value) filtered = filtered.filter(t => t.date === filterDate.value);
  if (filterStatus.value) filtered = filtered.filter(t => t.status === filterStatus.value);
  render(filtered);
};

function toggleStatus(i) {
  todos[i].status = todos[i].status === "Pending" ? "Done" : "Pending";
  save();
  render(todos);
}

function deleteOne(i) {
  todos.splice(i, 1);
  save();
  render(todos);
}

function render(list) {
  tbody.innerHTML = "";
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty">No task found</td></tr>`;
    return;
  }
  list.forEach((t, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${t.text}</td>
      <td>${t.date}</td>
      <td onclick="toggleStatus(${i})" style="cursor:pointer">${t.status}</td>
      <td><button class="action-btn" onclick="deleteOne(${i})">Delete</button></td>
    `;
    tbody.appendChild(row);
  });
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
    