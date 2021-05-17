'use strict'

const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector(".js-toDoInput"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";
const TODOS = [];

function saveTodos(obj){
    localStorage.setItem(TODOS_LS, JSON.stringify(obj));
}

function paintTodo(text){
const li = document.createElement('li');
const delBtn = document.createElement('button');
delBtn.innerText="☑️";
const span = document.createElement('span');
span.innerText=text;
li.id=TODOS.length;
li.appendChild(delBtn);
li.appendChild(span);
toDoList.appendChild(li);
const toDosObj = {
    text : text,
    id : TODOS.length
}
TODOS.push(toDosObj);
saveTodos(TODOS);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value='';
    paintTodo(currentValue);
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
if(loadedTodos !== null){
    console.log(loadedTodos);
    const parsedTodos = JSON.parse(loadedTodos);
    console.log(parsedTodos);
}
}

function init(){
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();