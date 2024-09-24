// Cambia el color de la barra de navegación al hacer scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Funcionalidad del menú de navegación
document.getElementById('menu-toggle').onclick = function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show'); // Cambia la clase para mostrar/ocultar
};
