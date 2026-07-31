/* =====================================================
   SOLENEVEHOUSE 4.0 PREMIUM
   script.js
===================================================== */

/* ==========================
   MENU MOBILE
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}

/* ==========================
   CHIUSURA MENU AL CLICK
========================== */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});

/* ==========================
   HEADER SCROLL
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(255,255,255,.97)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "none";

    }

});

/* ==========================
   BACK TO TOP
========================== */

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 500) {

        backTop.style.opacity = "1";
        backTop.style.pointerEvents = "auto";
        backTop.style.transform = "translateY(0)";

    } else {

        backTop.style.opacity = "0";
        backTop.style.pointerEvents = "none";
        backTop.style.transform = "translateY(20px)";

    }

});

/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".section-title, .about-grid, .services-grid, .gallery-grid, .experience-grid, .contact-grid"

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================
   SMOOTH ACTIVE MENU
========================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

console.log("✅ Solenevehouse Premium 4.0 caricato");
