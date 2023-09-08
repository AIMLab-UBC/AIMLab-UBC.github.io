document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementsByClassName('navbar');

    //Navbar scroll animations
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            banner[0].style.borderBottomColor = "#f15a29";
            banner[0].style.height = "88px";
        } else {
            banner[0].style.borderBottomColor = "white";
            banner[0].style.height = "66px";
        }
    });
});