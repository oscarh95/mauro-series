const dropdownBtn = document.getElementById("dropdown-btn")
const dropdownMenu = document.getElementById("dropdown-content")

const toggleDropdown = () => {
    dropdownMenu.classList.toggle("show");
}

dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
})

document.documentElement.addEventListener("click", (e) => {
    if(dropdownMenu.classList.contains("show")){
        toggleDropdown();
    }
})