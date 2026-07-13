```javascript
// ==============================
// SOLENEVEHOUSE PREMIUM
// ==============================

const menuButton = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("active");
    menuButton.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }

});

// Chiude il menu dopo il click su un link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.innerHTML = "☰";

    });

});
```
