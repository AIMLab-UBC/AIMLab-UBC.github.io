const banner = document.getElementsByClassName('navbar');

window.addEventListener('scroll', function() {
    const navbarContainer = document.getElementById('navbar-container');
    if (window.scrollY > 0) {
        banner[0].style.borderBottomColor = "#f15a29";
        banner[0].style.minHeight = "65px";
        navbarContainer.style.minHeight = "65px";
    } else {
        banner[0].style.borderBottomColor = "white";
        banner[0].style.minHeight = "50px";
        navbarContainer.style.minHeight = "50px";
    }
});