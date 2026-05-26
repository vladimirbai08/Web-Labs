function toggleTheme() {

    let body = document.body;

    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
}

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

showSlide(currentSlide);

function showSlide(index) {

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}