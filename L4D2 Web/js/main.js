function showPage(pageId) {

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });


    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });


    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }


    const selectedNavLink = document.getElementById('nav-' + pageId);
    if (selectedNavLink) {
        selectedNavLink.classList.add('active');
    }


    window.scrollTo(0, 0);
}

// Kinetic Interaction: Flashlight Effect
var light = 0
const flashlight = document.createElement('div');
flashlight.style.position = 'fixed';
flashlight.style.top = light;
flashlight.style.left = '0';
flashlight.style.width = '100%';
flashlight.style.height = '100%';
flashlight.style.pointerEvents = 'none';
flashlight.style.zIndex = '9999';
flashlight.style.background = 'radial-gradient(circle at 50% 50%, transparent 10%, rgba(0, 0, 0, 0.8) 40%)';
document.body.appendChild(flashlight);

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    flashlight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 10%, rgba(0, 0, 0, 0.8) 35%)`;
    
    // Parallax
    const moveX = (x - window.innerWidth / 2) * 0.01;
    const moveY = (y - window.innerHeight / 2) * 0.01;
    document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
});


document.addEventListener('mousedown', () => {
    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 50);
});


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
 
        link.style.letterSpacing = '4px';
    });
    link.addEventListener('mouseleave', () => {
        link.style.letterSpacing = '2px';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('L4D2 Mod Site Initialized');
});



