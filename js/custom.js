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

        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                banner[0].style.backgroundColor =   "#ffffffff";
                if (arrow[0] != undefined) {
                    arrow[0].style.display = "none"
                }

                navLinks.forEach(link => {
                    link.style.color = "#0f1419";
                });

                if (logo) {
                    logo.src = "/assets/project_pic/AIM_logo_transperant.png";
                }
            } else {
                banner[0].style.backgroundColor = "#ffffff00";
                if (arrow[0] != undefined) {
                    arrow[0].style.display = "unset"
                }

                navLinks.forEach(link => {
                    link.style.color = "white";
                });

                if (logo) {
                    logo.src = "/assets/project_pic/AIM_logo_transperant_light.png";
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
            if (window.scrollY <= 450) {
                if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
                    const lead = images[globalIndex % images.length],
                        tail = images[(globalIndex - 5) % images.length];

                    activate(lead, e.clientX, e.clientY);

                    if(tail) tail.dataset.status = "inactive";
                    
                    globalIndex++;
                }
            }
        }
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