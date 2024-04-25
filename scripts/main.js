const dropdownBtn = document.getElementById('dropdown-btn')
const dropdownContent = document.getElementById('dropdown-content')
const dropdownContainer = document.getElementById('dropdown')

//Dropdown menu for season nav
const toggleDropdown = () => {
    dropdownContent.classList.toggle('show');
}

dropdownBtn.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    toggleDropdown();
})

dropdownContainer.addEventListener('mouseleave', (e) => {
    if(dropdownContent.classList.contains('show')){
        toggleDropdown();
    }
})

//Fade out header when scrolling
let didScroll
let lastScrollTop = 0
const scrollCheck = 5
const navbarHeight = $('header').outerHeight()

$(window).scroll((e) => {
    didScroll = true
})

let headerScroll = () => {
    let scrollPosition = $(this).scrollTop()
    
    if(Math.abs(lastScrollTop - scrollPosition) <= scrollCheck)
        return

    if(scrollPosition > lastScrollTop && scrollPosition > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    }
    else{
        if(scrollPosition + $(window).height() < $(document).height()){
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = scrollPosition;
}

setInterval(() => {
    if(didScroll){
        headerScroll()
        didScroll = false
    }
}, 250)
