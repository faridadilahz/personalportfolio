function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');

    navLinks.classList.toggle('show');

    if (navLinks.classList.contains('show')) {
        menuToggle.style.display = 'none';
        menuClose.style.display = 'block';
    } else {
        menuToggle.style.display = 'block';
        menuClose.style.display = 'none';
    }
}

document.addEventListener('click', function (event) {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.menu-toggle');
    const closeButton = document.querySelector('.menu-close');

    if (!navLinks.contains(event.target) && !toggleButton.contains(event.target) && !closeButton.contains(event.target)) {
        navLinks.classList.remove('show');
        toggleButton.style.display = 'block';
        closeButton.style.display = 'none';
    }
});
