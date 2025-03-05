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

/* Modal Functionality */
function openModal(content) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    modalText.innerText = content;
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
