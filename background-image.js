'use strict'

const body = document.querySelector("body");
const IMAGES_NUMBER = 5;

function printImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function generateNumber(){
    const number = Math.ceil(Math.random()*IMAGES_NUMBER);
    return number
}

function init(){
    const randomNumber = generateNumber();
    printImage(randomNumber);
} 
init();