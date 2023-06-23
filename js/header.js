function renderHeader(isHomePage) {
    let bodyDOM = document.body;
    let url = isHomePage ? '' : '.';
    let HTML = `<header>
                    <a href="${url}./">Home</a>
                    <a href="${url}./clicker/">Clicker</a>
                    <a href="${url}./list/">List</a>
                    <a href="${url}./chess/">Chess</a>
                </header>`;
bodyDOM.insertAdjacentHTML("afterbegin", HTML);
}
export { renderHeader };