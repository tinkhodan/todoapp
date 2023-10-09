document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-button');
    const inputField = document.getElementById('todo-input');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        todoList.appendChild(listItem);
        inputField.value = '';
    });

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
