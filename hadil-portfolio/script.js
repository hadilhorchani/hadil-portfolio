/* =========================================================
   HADIL'S PORTFOLIO — INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       NAVBAR — SCROLL EFFECT
    ----------------------------------------------------- */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* -----------------------------------------------------
       SCROLL REVEAL
    ----------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-intro, .about-text, .project-card, .skill-group, .skill-cloud, .timeline-item, .contact-section"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* -----------------------------------------------------
       SMOOTH PROJECT LINK FEEDBACK
    ----------------------------------------------------- */

    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href = link.getAttribute("href");

            if (href === "#") {
                event.preventDefault();

                link.textContent = "Coming soon ✦";

                setTimeout(() => {
                    link.textContent = "Explore project ↗";
                }, 1800);
            }

        });

    });


    /* -----------------------------------------------------
       MOUSE GLOW
    ----------------------------------------------------- */

    const mouseGlow = document.createElement("div");

    mouseGlow.classList.add("mouse-glow");

    document.body.appendChild(mouseGlow);


    document.addEventListener("mousemove", event => {

        mouseGlow.style.left = `${event.clientX}px`;
        mouseGlow.style.top = `${event.clientY}px`;

    });


    /* -----------------------------------------------------
       PROJECT CARD TILT
    ----------------------------------------------------- */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -2;
            const rotateY = ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* -----------------------------------------------------
       CURRENT YEAR
    ----------------------------------------------------- */

    const yearElement = document.querySelector("footer p");

    if (yearElement) {

        yearElement.innerHTML =
            yearElement.innerHTML.replace(
                "2026",
                new Date().getFullYear()
            );

    }


    console.log("Hadil's portfolio is alive ✦");

});