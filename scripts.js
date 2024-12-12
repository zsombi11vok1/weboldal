document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = "0 0 20px #32CD32";
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = "none";
        });
    });
});
