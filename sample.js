/* ===== Hobbies ===== */

const Hobbies = ["Coding", "Reading", "Gaming"];


/* ===== Button Function ===== */

function onButtonClick() {

    console.log("Button Clicked");

    let name = document.getElementById("newInput").value;

    let age = document.getElementById("ageInput").value;

    let result = "";


    if (age < 18) {

        result = `<h2>Hello ${name}, You are a minor.</h2>`;

    }

    else if (age >= 18 && age < 65) {

        result = `<h2>Hello ${name}, You are an adult.</h2>`;

    }

    else {

        result = `<h2>Hello ${name}, You are a senior.</h2>`;

    }


    result += `<p>Your hobbies are:</p><ul>`;


    for (let i = 0; i < Hobbies.length; i++) {

        result += `<li>${Hobbies[i]}</li>`;

    }


    result += `</ul>`;


    document.getElementById("output").innerHTML = result;


    alert("Submitted");

}


/* ================================================= */
/* ================= IMAGE SLIDER ================== */
/* ================================================= */


const sliderTrack = document.querySelector(".slider-track");

const slides = document.querySelectorAll(".slide");

const slider = document.querySelector(".slider-container");

const prevButton = document.querySelector(".prev");

const nextButton = document.querySelector(".next");

const slideIndicators = document.querySelectorAll(".slide-indicator");

const AUTO_SLIDE_INTERVAL = 5000;


let currentSlide = 0;

let autoSlideTimer;


/* ===== Show Slide ===== */

function showSlide() {

    sliderTrack.style.transform =
        "translateX(-" + (currentSlide * 100) + "%)";

    slideIndicators.forEach(function (indicator, index) {

        if (index === currentSlide) {

            indicator.setAttribute("aria-current", "true");

        } else {

            indicator.removeAttribute("aria-current");

        }

    });

}


/* ===== Next Slide ===== */

function nextSlide() {

    currentSlide = currentSlide + 1;


    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    showSlide();

}


/* ===== Previous Slide ===== */

function previousSlide() {

    currentSlide = currentSlide - 1;


    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }


    showSlide();

}


/* ===== Next Button ===== */

nextButton.addEventListener("click", function () {

    nextSlide();

});


/* ===== Previous Button ===== */

prevButton.addEventListener("click", function () {

    previousSlide();

});


slideIndicators.forEach(function (indicator, index) {

    indicator.addEventListener("click", function () {

        currentSlide = index;

        showSlide();

    });

});


/* ===== Automatic Slider ===== */

function startAutoSlide() {

    autoSlideTimer = setInterval(function () {

        nextSlide();

    }, AUTO_SLIDE_INTERVAL);

}


function stopAutoSlide() {

    clearInterval(autoSlideTimer);

}


slider.addEventListener("mouseenter", stopAutoSlide);

slider.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();