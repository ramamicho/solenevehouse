/* =====================================================
   SOLENEVEHOUSE
   SCRIPT.JS - PARTE 1
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTI
    ========================== */

    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const backToTop = document.querySelector(".back-to-top");

    /* ==========================
       HEADER SCROLL
    ========================== */

    function updateHeader() {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================
       MENU MOBILE
    ========================== */

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

        });

    }

    /* ==========================
       CHIUSURA MENU
    ========================== */

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

        });

    });

    /* ==========================
       PULSANTE TORNA SU
    ========================== */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    updateBackToTop();

    window.addEventListener("scroll", updateBackToTop);

    /* ==========================
       SCROLL FLUIDO
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});
