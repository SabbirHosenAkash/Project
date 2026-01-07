/**
 * Sabbir Hosen Akash - Final Integrated Script
 */

// --- ১. পেজ লোডার (Skeleton Loader) হ্যান্ডলিং ---
// সাইট পুরোপুরি লোড হওয়ার পর লোডারটি ভ্যানিশ হবে
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// --- ২. টাইপিং ইফেক্ট (Typing Effect) ---
const textArray = ["Bangladeshi Musician", "Creative Writer", "Web Developer", "SEO Expert", "Professional Keyboardist"];
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

    let typeSpeed = isDeleting ? 60 : 150;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // লেখা শেষ হওয়ার পর ২ সেকেন্ড অপেক্ষা
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// --- ৩. মোবাইল মেনু টগল (Navbar Logic) ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// মেনুর লিঙ্কে ক্লিক করলে মেনু অটোমেটিক বন্ধ হয়ে যাবে (মোবাইলের জন্য)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// --- ৪. ৩ডি স্কিল বার এনিমেশন (Skill Bar Animation on Scroll) ---
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.fill-3d');
            progressBars.forEach(bar => {
                // CSS ভ্যারিয়েবল --width থেকে মান নিয়ে উইডথ সেট করা
                const targetWidth = bar.style.getPropertyValue('--width');
                bar.style.width = targetWidth;
            });
        }
    });
}, { threshold: 0.3 });

const skillSection = document.getElementById('skills');
if (skillSection) {
    skillObserver.observe(skillSection);
}

// --- ৫. Swiper JS (প্রজেক্ট স্লাইডার) ---
// স্লাইডারটি যেন ৩ডি এবং অটোমেটিক চলে
const swiper = new Swiper('.project-slider', {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

// --- ৬. AOS (Scroll Animation) ইনিশিয়ালাইজেশন ---
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// --- ৭. Particles JS কনফিগারেশন (ব্যাকগ্রাউন্ড ইফেক্ট) ---
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ff88" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { 
                "onhover": { "enable": true, "mode": "grab" }, 
                "onclick": { "enable": true, "mode": "push" } 
            }
        },
        "retina_detect": true
    });
}

// --- ৮. ইনিশিয়ালাইজেশন ---
document.addEventListener("DOMContentLoaded", () => {
    // পেজ লোড হওয়ার ১ সেকেন্ড পর টাইপিং শুরু হবে
    setTimeout(typeEffect, 1000);
});
