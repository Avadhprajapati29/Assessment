// Select the input field and the button
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Add an event listener to the button
addButton.addEventListener('click', () => {
    // Get the value of the input field
    const todoText = inputField.value.trim();

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    // Add the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    inputField.value = '';

    // Store the todo list in cookies
    const todoListArray = Array.from(todoList.children);
    const todoListString = todoListArray.map(item => item.textContent).join(',');
    document.cookie = `todoList=${todoListString}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
});