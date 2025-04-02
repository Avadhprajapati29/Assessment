const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
    const todoText = inputField.value.trim();
    const listItem = document.createElement('hi');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    inputField.value = '';
});
