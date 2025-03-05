document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".project").forEach(project => {
        project.style.opacity = 0;
        project.style.transform = "translateY(20px)";
        project.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", function() {
        document.querySelectorAll(".project").forEach(project => {
            let position = project.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                project.style.opacity = 1;
                project.style.transform = "translateY(0)";
            }
        });
    });
});
