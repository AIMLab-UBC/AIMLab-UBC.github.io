document.addEventListener("DOMContentLoaded", function() {
    //Navbar bold text
    let currentURL = window.location.pathname;
    let navLinks = document.querySelectorAll(".nav a");
    
    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href").replace(/\/$/, ""); // remove trailing slash if it exists
        let adjustedCurrentURL = currentURL.replace(/\/$/, "");      // remove trailing slash if it exists
        
        if (linkHref === adjustedCurrentURL) {
            link.classList.add("active-link");
        }
    });

    const isUpdatedPage = document.body.classList.contains('updated-pages');

    if (isUpdatedPage) {
        //Navbar scroll animation - new
        const banner = document.getElementsByClassName('navbar');
        const arrow = document.getElementsByClassName("arrow");
        const navLinks = document.querySelectorAll('.nav > li > a');
        const logo = document.querySelector('.navbar-brand img')
        const collapse = document.querySelector('.collapse')

        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                if (document.querySelector('.navbar2')) {
                    // using the 'non-front-page' navbar
                    
                } else {
                    banner[0].style.backgroundColor =   "#ffffffff";
                    if (arrow[0] != undefined) {
                        arrow[0].style.display = "none"
                    }

                    navLinks.forEach(link => {
                        link.classList.remove('nav-dark');
                    });

                    navLinks.forEach(link => {
                        link.classList.add('nav-light');
                    });

                    collapse.classList.remove('collapse-dark');
                    collapse.classList.add('collapse-light');

                    if (logo) {
                        logo.src = "/assets/project_pic/AIM_logo_transperant.png";
                    }
                }
            } else {
                if (document.querySelector('.navbar2')) {
                    // using the 'non-front-page' navbar
                    
                } else {
                    // front page navbar
                    banner[0].style.backgroundColor = "#ffffff00";
                    if (arrow[0] != undefined) {
                        arrow[0].style.display = "unset"
                    }

                    navLinks.forEach(link => {
                        link.classList.remove('nav-light');
                    });

                    navLinks.forEach(link => {
                        link.classList.add('nav-dark');
                    });
                        
                    collapse.classList.remove('collapse-light');
                    collapse.classList.add('collapse-dark');

                    if (logo) {
                        logo.src = "/assets/project_pic/AIM_logo_transperant_light.png";
                    }
                }
            }
        });
    } else {
        //Navbar scroll animation - old
        const banner = document.getElementsByClassName('navbar');
        const arrow = document.getElementsByClassName("arrow");
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                banner[0].style.borderBottomColor = "#f15a29";
                banner[0].style.height = "88px";
                if (arrow[0] != undefined) {
                    arrow[0].style.display = "none"
                }
            } else {
                banner[0].style.borderBottomColor = "#ffffff00";
                banner[0].style.height = "66px";
                if (arrow[0] != undefined) {
                    arrow[0].style.display = "unset"
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

    // Swiper carousel
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 1024px
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 1024px
            1600: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
    });
});