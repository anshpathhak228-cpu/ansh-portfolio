document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");


    /* ================= MOBILE MENU ================= */

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* ================= CLOSE MOBILE MENU ================= */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    function updateNavigation() {

        let current = "home";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateNavigation,
        { passive: true }
    );

    updateNavigation();


    /* ================= HEADER SHADOW ================= */

    const header =
        document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.10)";

        } else {

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.06)";

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* ================= SCROLL REVEAL ================= */

    const revealItems =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-text, " +
            ".about-info, " +
            ".skill-card, " +
            ".project, " +
            ".certificate, " +
            ".contact"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    revealItems.forEach(item => {

        item.classList.add("reveal");

        observer.observe(item);

    });


    /* ================= CLOSE MENU ON RESIZE ================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            nav.classList.remove("open");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});