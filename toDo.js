'use strict'

const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector(".js-toDoInput"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";
let TODOS_ARRAY = [];
let idNumbers = 1;

function saveToDo(obj){
localStorage.setItem(TODOS_LS, JSON.stringify(obj));
}

function deleteTodo(e){
    const btn = e.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);
    const cleanTodo = TODOS_ARRAY.filter(function(todo){
        return todo.id !== parseInt(li.id)
    });
    TODOS_ARRAY=cleanTodo;
    saveToDo(cleanTodo);
}

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = idNumbers;
    idNumbers = idNumbers + 1

    span.textContent = text;
    delBtn.textContent = '❌';
    delBtn.addEventListener('click', deleteTodo);
    
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
li.id=newId;
const todosObj = {
    text : text,
    id : newId
}
TODOS_ARRAY.push(todosObj);
saveToDo(TODOS_ARRAY);
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value='';
    
}


function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
if(loadedTodos !== null){
    const parsedTodos = JSON.parse(loadedTodos);
   parsedTodos.forEach(function(todo){
paintToDo(todo.text);
   });

};
}


function init(){
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();