document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("ul li a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            if (navLink.getAttribute("href").slice(1) === current) {
                navLink.classList.add("active");
            }
        });
    });
});





var typed = new Typed("#element", {
  strings: ["Web Developer", "Programmer", "Web Designer"],
  typeSpeed: 50,
});
