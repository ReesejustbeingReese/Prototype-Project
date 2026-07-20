/* ===============================
   Visit Taniti - script.js
   WGU D479 Interactive Prototype
================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Visit Taniti website loaded successfully.");

    // Display current year in footer
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} Visit Taniti | WGU D479 Interactive Prototype`;
    }

    // Highlight active navigation link
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const page = link.getAttribute("href");

        if (page === currentPage || (currentPage === "" && page === "index.html")) {
            link.classList.add("active");
        }
    });

});

/* ============================
   Contact Form
============================ */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {

            alert("Please complete all required fields.");

            return;
        }

        alert("Thank you for contacting Visit Taniti! We will respond as soon as possible.");

        contactForm.reset();

    });

}

/* ============================
   Booking Form
============================ */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const arrival =
            document.getElementById("arrival").value;

        const departure =
            document.getElementById("departure").value;

        if (arrival === "" || departure === "") {

            alert("Please select your arrival and departure dates.");

            return;
        }

        if (new Date(arrival) >= new Date(departure)) {

            alert("Departure date must be after the arrival date.");

            return;
        }

        alert("Thank you! Your reservation request has been submitted. A travel specialist will contact you soon.");

        bookingForm.reset();

    });

}

/* ============================
   FAQ Expand / Collapse
============================ */

const faqCards = document.querySelectorAll(".faq-section .card");

faqCards.forEach(card => {

    const answer = card.querySelector("p");

    if (answer) {

        answer.style.display = "none";

        card.style.cursor = "pointer";

        card.addEventListener("click", function () {

            if (answer.style.display === "none") {

                answer.style.display = "block";

            } else {

                answer.style.display = "none";

            }

        });

    }

});

/* ============================
   Scroll to Top Button
============================ */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ============================
   Welcome Message
============================ */

window.addEventListener("load", function () {

    console.log("Welcome to Visit Taniti!");

});

/* ============================
   Current Date
============================ */

const dateElement = document.getElementById("currentDate");

if (dateElement) {

    const today = new Date();

    dateElement.textContent =
        today.toLocaleDateString();

}