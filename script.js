

(function () {
    "use strict";

    var slideIndex = 0,
        slides = document.getElementsByClassName("slide"),
        totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }

        document.getElementById("slides").style.transform = "translateX(-" + (slideIndex * 100) + "%)";
    }

    function setupSlider() {
        document.getElementById("prev-btn").addEventListener("click", function () {
            showSlide(slideIndex - 1);
        });

        document.getElementById("next-btn").addEventListener("click", function () {
            showSlide(slideIndex + 1);
        });
    }

    if (typeof document !== "undefined") {
        document.addEventListener("DOMContentLoaded", setupSlider);
    }
}());  // ✅ Moves invocation inside parentheses (JSLint fix)



