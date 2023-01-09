"use strict";
const btn = document.getElementById("btn"); // (The return type for this statement is "HTMLElement | null" by default)
const myInput = document.getElementById("todo-input");
const form = document.querySelector("form"); // querySelector WORKS ootb --> type=HTMLFormElement
const list = document.getElementById("todo-list");
const readToDos = () => {
    const todosJSON = localStorage.getItem("todostorage"); // read from local storage
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const saveToDos = () => {
    localStorage.setItem("todostorage", JSON.stringify(todosArr));
};
const createTodoHTML = (todo) => {
    const newLI = document.createElement("LI");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed; // returns bool ==> check or uncheck
    checkBox.addEventListener("change", function () {
        todo.completed = checkBox.checked;
        saveToDos();
    });
    newLI.append(todo.text);
    newLI.append(checkBox);
    list.append(newLI);
};
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent defualt form submisison with refresh and HTTP request
    const newTodo = {
        text: myInput.value,
        completed: false
    };
    createTodoHTML(newTodo);
    todosArr.push(newTodo);
    saveToDos();
    myInput.value = ""; // Clear input
});
const todosArr = readToDos();
todosArr.forEach(createTodoHTML);
