import { renderHeader } from "./header.js";
renderHeader(false);
console.clear();
let formDOM = document.querySelector("form");
let minus3DOM = formDOM.querySelector("button");
let minus1DOM = formDOM.querySelector("button:nth-child(2)");
let numberDOM = formDOM.querySelector("div");
let plus1DOM = formDOM.querySelector("button:nth-child(4)");
let plus3DOM = formDOM.querySelector("button:nth-child(5)");

let counter = 0;

plus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    numberDOM.textContent = ++counter;
});
minus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    numberDOM.textContent = --counter;
});
plus3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter += 3;
    numberDOM.textContent = counter;
});
minus3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter -= 3;
    numberDOM.textContent = counter;
});