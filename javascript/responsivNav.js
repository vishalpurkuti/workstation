const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    const link = document.querySelectorAll('.nav-links li a');
    link.forEach((a) => {
        a.style.opacity = '1';
        a.style.transform = 'translatex(0)'
    });
}
navSlide();