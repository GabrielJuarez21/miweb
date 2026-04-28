// Validación simple del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const email = this.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Por favor, ingresa un correo válido.');
    }
});

// Animación simple al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
    } else {
        nav.style.padding = '15px 0';
    }
});