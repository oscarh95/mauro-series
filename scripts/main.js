const dropdownBtn = document.getElementById("dropdown-btn")
const dropdownContent = document.getElementById("dropdown-content")
const dropdownContainer = document.getElementById("dropdown")

const toggleDropdown = () => {
    dropdownContent.classList.toggle("show");
}

dropdownBtn.addEventListener("mouseover", (e) => {
    e.stopPropagation();
    toggleDropdown();
})

dropdownContainer.addEventListener("mouseleave", (e) => {
    if(dropdownContent.classList.contains("show")){
        toggleDropdown();
    }
})