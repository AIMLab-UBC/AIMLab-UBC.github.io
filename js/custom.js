document.addEventListener("DOMContentLoaded", function () {
    let currentURL = window.location.pathname;
    let navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href").replace(/\/$/, ""); // remove trailing slash if exists
        let adjustedCurrentURL = currentURL.replace(/\/$/, "");      // remove trailing slash if exists

        if (linkHref === adjustedCurrentURL) {
            link.classList.add("active-link");
        }
    });

    const isUpdatedPage = document.body.classList.contains('updated-pages');

    if (isUpdatedPage) {
        const banner = document.querySelector('.navbar');
        const arrow = document.querySelector(".arrow");
        const navLinks = document.querySelectorAll('.nav > li > a');
        const logo = document.querySelector('.navbar-brand img');
        const collapse = document.querySelector('.collapse');

        let prevState = window.scrollY > 0 ? "scrolled" : "top";

        window.addEventListener('scroll', function () {
            let currentState = window.scrollY > 0 ? "scrolled" : "top";

            if (currentState !== prevState) {
                prevState = currentState; // Update state only when changed

                if (currentState === "scrolled") {
                    if (!document.querySelector('.navbar2')) {
                        banner.style.backgroundColor = "#ffffffff";
                        if (arrow) arrow.style.display = "none";

                        navLinks.forEach(link => {
                            link.classList.remove('nav-dark');
                            link.classList.add('nav-light');
                        });

                        collapse.classList.remove('collapse-dark');
                        collapse.classList.add('collapse-light');

                        if (logo) {
                            logo.src = "/assets/project_pic/AIM_logo_transperant.png";
                        }
                    }
                } else {
                    if (!document.querySelector('.navbar2')) {
                        banner.style.backgroundColor = "#ffffff00";
                        if (arrow) arrow.style.display = "unset";

                        navLinks.forEach(link => {
                            link.classList.remove('nav-light');
                            link.classList.add('nav-dark');
                        });

                        collapse.classList.remove('collapse-light');
                        collapse.classList.add('collapse-dark');

                        if (logo) {
                            logo.src = "/assets/project_pic/AIM_logo_transperant_light.png";
                        }
                    }
                }
            }
        });
    } else {
        const banner = document.querySelector('.navbar');
        const arrow = document.querySelector(".arrow");

        let prevState = window.scrollY > 0 ? "scrolled" : "top";

        window.addEventListener('scroll', function () {
            let currentState = window.scrollY > 0 ? "scrolled" : "top";

            if (currentState !== prevState) {
                prevState = currentState;

                if (currentState === "scrolled") {
                    banner.style.borderBottomColor = "#f15a29";
                    banner.style.height = "88px";
                    if (arrow) arrow.style.display = "none";
                } else {
                    banner.style.borderBottomColor = "#ffffff00";
                    banner.style.height = "66px";
                    if (arrow) arrow.style.display = "unset";
                }
            }
        });
    }
    //Front page image effect
    const images = document.getElementsByClassName("image");
    if (images[0] != undefined) {
        let globalIndex = 0,
        last = { x: 0, y: 0 };
    
        const container = document.querySelector(".front-effect-container"); // Update with your container class
        const containerRect = container.getBoundingClientRect(); // Get container's position
    
        const activate = (image, x, y) => {
            image.style.left = `${x}px`;
            image.style.top = `${y}px`;
            image.style.zIndex = globalIndex;
    
            image.dataset.status = "active";
    
            last = { x, y };
        };
    
        const distanceFromLast = (x, y) => {
            return Math.hypot(x - last.x, y - last.y);
        };
    
        const handleOnMove = e => {  
            if (window.scrollY <= 450) {
                const mouseX = e.clientX - containerRect.left; // Adjust for container's left offset
                const mouseY = e.clientY - containerRect.top;  // Adjust for container's top offset
    
                if(distanceFromLast(mouseX, mouseY) > (window.innerWidth / 20)) {
                    const lead = images[globalIndex % images.length],
                        tail = images[(globalIndex - 5) % images.length];
    
                    activate(lead, mouseX, mouseY);
    
                    if(tail) tail.dataset.status = "inactive";
                    
                    globalIndex++;
                }
            }
        };
    
        window.onmousemove = e => handleOnMove(e);
        window.ontouchmove = e => handleOnMove(e.touches[0]);
    }
});

