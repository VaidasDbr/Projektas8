import { renderHeader } from "../js/header.js";
renderHeader();
let formDOM = document.querySelector('form');
let inputDOM = formDOM.querySelector('input');
let boardDOM = document.querySelector('.board');
formDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    let number = parseInt(inputDOM.value);
    if (number > 0 && number%1 === 0) {
        renderChessBoard(number);
    }
});
function renderChessBoard(size = 8) {
    let blackHTML = '';
    let whiteHTML = '';
    let HTML = '';
    for (let m = 0; m < size; m++) {
        blackHTML += `<div class="cell ${m % 2 === 0 ? 'black' : ''}"></div>`;
        whiteHTML += `<div class="cell ${m % 2 === 0 ? '' : 'black'}"></div>`;
    }
    for (let i = 0; i < size; i++) {
        HTML += `<div class="row">${i % 2 === 0 ? blackHTML : whiteHTML}</div>`;
    }
    boardDOM.innerHTML = HTML;
}
renderChessBoard();