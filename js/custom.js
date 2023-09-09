

document.addEventListener("DOMContentLoaded", function() {
    //Navbar underlines
    let currentURL = window.location.href;
    let navLinks = document.querySelectorAll(".navbar-nav a");
    
    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href").replace(/\/$/, "");
        let adjustedCurrentURL = currentURL.replace(/\/$/, "");   // remove trailing slash
        
        if (linkHref === adjustedCurrentURL) {
            link.classList.add("active-link");
        }
    });

    //Navbar scroll animations
    const banner = document.getElementsByClassName('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            //banner[0].style.backgroundColor = "white";
            banner[0].style.borderBottomColor = "#f15a29";
            banner[0].style.height = "88px";
        } else {
            //banner[0].style.backgroundColor = "#ffffff00";
            banner[0].style.borderBottomColor = "#ffffff00";
            banner[0].style.height = "66px";
        }
    });

    //Front page image effect
    const images = document.getElementsByClassName("image");
    if (images[0] != undefined) {
        let globalIndex = 0,
        last = { x: 0, y: 0 };

        const activate = (image, x, y) => {
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        image.style.zIndex = globalIndex;

        image.dataset.status = "active";

        last = { x, y };
        }

        const distanceFromLast = (x, y) => {
        return Math.hypot(x - last.x, y - last.y);
        }

        const handleOnMove = e => {
        if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
            const lead = images[globalIndex % images.length],
                tail = images[(globalIndex - 5) % images.length];

            activate(lead, e.clientX, e.clientY);

            if(tail) tail.dataset.status = "inactive";
            
            globalIndex++;
        }
        }

        window.onmousemove = e => handleOnMove(e);
        window.ontouchmove = e => handleOnMove(e.touches[0]);
    }
});