document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.add("active");
    });

    closeSidebar.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });

    const gridViewBtn = document.querySelector(".grid-view");
    const listViewBtn = document.querySelector(".list-view");
    const productGrid = document.querySelector(".product-grid");

    gridViewBtn.addEventListener("click", function () {
        productGrid.classList.remove("list-mode");
        productGrid.classList.add("grid-mode");
    });

    listViewBtn.addEventListener("click", function () {
        productGrid.classList.remove("grid-mode");
        productGrid.classList.add("list-mode");
    });
});

function showTab(index) {
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));
    tabs[index].classList.add("active");
    contents[index].classList.add("active");
}

function updateFlag() {
    const countrySelect = document.getElementById("country-select");
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const flagSrc = selectedOption.getAttribute("data-flag");

    document.getElementById("selected-flag").src = flagSrc;
    document.getElementById("selected-flag").alt = selectedOption.value + " Flag";
}

function startCountdown(durationInSeconds) {
    const timerElement = document.querySelector(".timer");
    
    function updateTimerDisplay(days, hours, minutes, seconds) {
        timerElement.innerHTML = `
            <div>${days} <span>Day</span></div>
            <div>${hours} <span>Hour</span></div>
            <div>${minutes} <span>Min</span></div>
            <div>${seconds} <span>Sec</span></div>
        `;
    }
    
    function calculateTime() {
        const now = new Date().getTime();
        const targetTime = now + durationInSeconds * 1000;
        
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const remainingTime = targetTime - currentTime;
            
            if (remainingTime <= 0) {
                clearInterval(interval);
                updateTimerDisplay(0, 0, 0, 0);
                return;
            }
            
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            
            updateTimerDisplay(days, hours, minutes, seconds);
        }, 1000);
    }
    
    calculateTime();
}

const totalSeconds = (4 * 24 * 60 * 60) + (13 * 60 * 60) + (34 * 60) + 56;
startCountdown(totalSeconds);



