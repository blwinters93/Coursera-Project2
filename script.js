document.addEventListener("DOMContentLoaded", function() {
    /* Expand Only One Project Box on Hover */
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
        document.getElementById("modal-link").style.color = "white"; // Fix color contrast
        modal.style.display = "flex";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    document.querySelector(".modal-close").addEventListener("click", closeModal);
    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
