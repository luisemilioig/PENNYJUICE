document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100 + "%";
        document.getElementById("slides").style.transform = `translateX(${offset})`;
    }

    prevBtn.addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
