const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener("click", () => {
        desactivar();
        card.classList.add("active");
    });
});

const desactivar = () => {
    cards.forEach((card) => {
        card.classList.remove("active")
    });
};