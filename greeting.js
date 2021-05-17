'use strict'

const nameForm = document.querySelector(".js-nameForm"),
nameInput = nameForm.querySelector(".js-nameInput"),
greeting = document.querySelector(".js-greeting");


const NAME_LS = "name";
const SHOWING_CL = "showing";


function handleSubmit(event){
event.preventDefault();
const currentValue = nameInput.value;
localStorage.setItem(NAME_LS, currentValue);
    nameInput.value = '';
    paintGreeting(currentValue)
}

function askForName(){
    nameForm.classList.add("showing");
    greeting.classList.remove("showing");
}

function paintGreeting(text){
       nameForm.classList.remove(SHOWING_CL);
greeting.classList.add(SHOWING_CL);
greeting.innerText = `Hi ${text}`;
}

function loadName(){
const loadedName = localStorage.getItem(NAME_LS);
if(loadedName === null){
    askForName();
}else{
    paintGreeting(loadedName);
}
}

function init(){
loadName();
nameForm.addEventListener("submit", handleSubmit);
}   
init();