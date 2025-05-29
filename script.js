// Menu hamburguer
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Popup WhatsApp
function toggleWhatsapp() {
    const popup = document.getElementById('whatsapp-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}
