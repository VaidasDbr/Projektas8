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
    let HTML = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            HTML += '<div class="row">';
            for (let j = 0; j < size; j++) {
                if (j % 2 === 0) {
                    HTML += '<div class="cell black"></div>';
                } else {
                    HTML += '<div class="cell"></div>';
                }
            }
            HTML += '</div>';
        } else {
            HTML += '<div class="row">';
            for (let j = 0; j < size; j++) {
                if (j % 2 === 0) {
                    HTML += '<div class="cell"></div>';
                } else {
                    HTML += '<div class="cell black"></div>';
                }
            }
            HTML += '</div>';
        }
    }
    boardDOM.innerHTML = HTML;
}
renderChessBoard();