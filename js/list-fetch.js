import { renderHeader } from "./header.js";
renderHeader(false);
let url = "http://localhost:5555/data/goods.json";
let listDOM = document.querySelector('ul');
if (listDOM) {
    try {
        let response = await fetch(url);
        let goods = await response.json();
        for (let {name, price} of goods) {
            let formatedPrice = price.toFixed(2).replace('.',',');
            HTML += `<li>${name} (${formatedPrice} Eur)</li>`;
        }
    } catch (error) {
        HTML = "<p>ERROR: kazkas blogai...</p>";
    } finally {
        listDOM.innerHTML = HTML;
    }
}