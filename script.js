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
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = description;
    const modalLink = document.getElementById("modal-link");
    modalLink.href = link;
    modalLink.innerText = "View Project";
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
