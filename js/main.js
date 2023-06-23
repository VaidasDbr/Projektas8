import { renderHeader } from "./header.js";
renderHeader(true);
//console.clear();
let buttonDOM = document.getElementById('mygtukas');
let titleDOM = document.getElementById("antraste");
function kaDaryti() {
    titleDOM.textContent = "Labas vakaras!"; 
}
buttonDOM.addEventListener("click",kaDaryti);
