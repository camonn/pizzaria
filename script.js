// Script para o menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Função que alterna a classe 'active' no menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
