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
/* =====================================================
   SCRIPT.JS - PARTE 2
   ANIMAZIONI
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTI DA ANIMARE
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".card, .advantage, .experience-card, .contact-card, .about-image, .gallery-grid img"
    );

    /* Stato iniziale */

    animatedElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity .8s ease, transform .8s ease";

    });

    /* ==========================
       INTERSECTION OBSERVER
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    animatedElements.forEach(el => observer.observe(el));

    /* ==========================
       ANIMAZIONE TITOLI
    ========================== */

    const titles = document.querySelectorAll(".section-title");

    titles.forEach(title => {

        title.style.opacity = "0";
        title.style.transform = "translateY(30px)";
        title.style.transition = "all .8s ease";

    });

    const titleObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                titleObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    titles.forEach(title => titleObserver.observe(title));

});
/* =====================================================
   SCRIPT.JS - PARTE 3
   GALLERY LIGHTBOX
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LIGHTBOX
    ========================== */

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (galleryImages.length > 0) {

        const overlay = document.createElement("div");
        overlay.className = "lightbox";

        overlay.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
        `;

        document.body.appendChild(overlay);

        const lightboxImage = overlay.querySelector(".lightbox-image");
        const closeButton = overlay.querySelector(".lightbox-close");

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                overlay.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });

        function closeLightbox() {

            overlay.classList.remove("active");

            document.body.style.overflow = "";

        }

        closeButton.addEventListener("click", closeLightbox);

        overlay.addEventListener("click", (e) => {

            if (e.target === overlay) {

                closeLightbox();

            }

        });

        document.addEventListener("keydown", (e) => {

            if (e.key === "Escape") {

                closeLightbox();

            }

        });

    }

});
