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

    /* Fade-in effect for Portfolio and Contact sections */
    const fadeSections = document.querySelectorAll(".fade-in");

    function fadeInSection() {
        fadeSections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                section.classList.add("fade-in-visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInSection);
    fadeInSection();

    /* Expand Project Box on Hover (Accordion Style) */
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseover", function() {
            this.style.height = "auto";
            this.querySelector(".project-summary").style.display = "block";
            this.querySelector(".project-link").style.display = "block";
        });

        project.addEventListener("mouseleave", function() {
            this.style.height = "initial";
            this.querySelector(".project-summary").style.display = "none";
            this.querySelector(".project-link").style.display = "none";
        });
    });

    /* Modal Functionality */
    document.querySelectorAll(".project-link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const title = this.parentElement.dataset.title;
            const description = this.parentElement.dataset.description;
            const link = this.parentElement.dataset.link;
            openModal(title, description, link);
        });
    });

    function openModal(title, description, link) {
        const modal = document.getElementById("modal");
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-text").innerText = description;
        document.getElementById("modal-link").href = link;
        modal.style.display = "flex";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    /* Responsive Design Adjustments */
    function adjustLayout() {
        const portfolioGrid = document.querySelector(".portfolio-grid");
        if (window.innerWidth <= 768) {
            portfolioGrid.style.gridTemplateColumns = "1fr";
        } else if (window.innerWidth <= 1024) {
            portfolioGrid.style.gridTemplateColumns = "1fr 1fr";
        } else {
            portfolioGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        }
    }

    window.addEventListener("resize", adjustLayout);
    adjustLayout();
});
