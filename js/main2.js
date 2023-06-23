let equationDOM = document.querySelector(".equation");
let buttonsDOM = document.querySelector(".key");
for (let buttonDOM of buttonsDOM) {
    buttonDOM.addEventListener("click" , () => {
        let buttonValue = buttonDOM.innerText;
        let currentEquationValue = equationDOM.innerText;
        let updateEquationValue = currentEquationValue;
        if (buttonValue === "C") {
            updateEquationValue = "";
        } else if (buttonValue === "<=") {
            updateEquationValue = currentEquationValue.slice(0, -1);
        } else {
            updateEquationValue += buttonValue;
        }
        equationDOM.innerText = updateEquationValue;
    });
}