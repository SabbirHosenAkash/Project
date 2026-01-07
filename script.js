// --- 1. Typing Effect ---
const textArray = ["Musician", "Writer", "Web Developer", "SEO Expert"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing-effect");
    if (!typingElement) return;
    const currentText = textArray[textIndex];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    let typeSpeed = isDeleting ? 80 : 150;
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}

// --- 2. AOS ---
AOS.init({ duration: 1000, once: true });

// --- 3. Swiper ---
new Swiper('.project-slider', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination', clickable: true },
});

// --- 4. Skill Bar ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.fill-3d');
            bars.forEach(bar => {
                bar.style.width = bar.getAttribute('style').split('--width: ')[1].split(';')[0];
            });
        }
    });
}, { threshold: 0.5 });

const skills = document.getElementById('skills');
if (skills) observer.observe(skills);

// --- 5. Menu ---
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

// --- 6. Particles ---
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#00ff88" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.2 },
        "move": { "enable": true, "speed": 3 }
    }
});

document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 1000));
