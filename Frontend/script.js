function updateFlag() {
    const countrySelect = document.getElementById("country-select");
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const flagSrc = selectedOption.getAttribute("data-flag");


    document.getElementById("selected-flag").src = flagSrc;
    document.getElementById("selected-flag").alt = selectedOption.value + " Flag";
}




document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.querySelector(".grid-view");
    const listViewBtn = document.querySelector(".list-view");
    const productGrid = document.querySelector(".product-grid");

    // Function to switch to grid view
    gridViewBtn.addEventListener("click", function () {
        productGrid.classList.remove("list-mode");
        productGrid.classList.add("grid-mode");
    });

    // Function to switch to list view
    listViewBtn.addEventListener("click", function () {
        productGrid.classList.remove("grid-mode");
        productGrid.classList.add("list-mode");
    });
});
