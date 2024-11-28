document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animate');

    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});