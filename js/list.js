import { renderHeader } from "./header.js";
renderHeader(false);
let goods = [
    { name: 'Morka', price: 1, },
    { name: 'Kopustas', price: 1.5, },
    { name: 'Svogunas', price: 2, },
    { name: 'Agurkas', price: 3, },
    { name: 'Pomidoras', price: 4.5, },
    { name: 'Bulve', price: 1.29, },
    { name: 'Kalafioras', price: 102.99, },
];
let listDOM = document.querySelector('ul');
for (let {name, price} of goods) {
    let formatedPrice = price.toFixed(2).replace('.',',');
    listDOM.innerHTML += `<li>${name} (${formatedPrice} Eur)</li>`;
}
