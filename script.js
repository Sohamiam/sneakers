const photo = document.getElementById("Images main logo.png");
const container = document.querySelector(".container6 ");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 0) {
        // Scrolling down
        photo.style.transform = "rotate(-90deg)";
    } else if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up
        photo.style.transform = "rotate(0deg)";
    }

    lastScrollPosition = currentScrollPosition;
});

container.addEventListener("mouseenter", function () {
    photo.style.transition = "none";
});

container.addEventListener("mouseleave", function () {
    photo.style.transition = "transform 0.5s ease-in-out";
});