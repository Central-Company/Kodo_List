const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click' || 'Enter', function() {
    const taskContent = input.value.trim();
    if (taskContent === '') {
        alert('Nhập nội dung công việc!');
        return;
    }
    createTodo(taskContent);
    input.value = '';
});

function createTodo(text) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'task-' + Date.now();

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.innerHTML = `<span>${text}</span>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Xóa';

    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });

    checkbox.addEventListener('change', function() {
        const textSpan = label.querySelector('span');
        if (checkbox.checked) {
            textSpan.style.textDecoration = 'line-through';
            textSpan.style.color = '#888';
        } else {
            textSpan.style.textDecoration = 'none';
            textSpan.style.color = '#000';
        }
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
}