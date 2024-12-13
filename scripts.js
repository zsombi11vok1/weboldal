// Görgetés közben a szekciók animációja
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".content-section");
    const triggerPoint = window.innerHeight * 0.75;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});

// Gombkattintás interaktív animáció
document.querySelectorAll(".cta-buttons a").forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.style.transform = "scale(1.2)";
        setTimeout(() => {
            e.target.style.transform = "scale(1)";
        }, 200);
    });
});
