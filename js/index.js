AOS.init({
    // Durée plus réaliste pour des animations modernes
    duration: 1800,          // ms, durée de chaque animation
    delay: 100,              // petite delay par défaut
    easing: 'ease-out-cubic',// plus smooth et naturel
    once: false,              
    mirror: true,           
    offset: 120,            
    anchorPlacement: 'top-bottom' 
});


document.documentElement.style.scrollBehavior = "smooth";

// Texte animé
const texts = [
    "Amara Fofana",
    "Développeur web & Mobile",
    "Analyste en BI ",
    "Expert CyberSecurité",
    "Ingénieur DevOps"
];

let index = 0;
let charIndex = 0;
const speed = 100;
const target = document.querySelector(".auto-text");

function typeEffect() {
    if (charIndex < texts[index].length) {
        target.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        target.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed / 2);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// ⚡ Compteur animé quand AOS déclenche l'apparition
document.addEventListener('aos:in', ({ detail }) => {
    if (detail.classList.contains('stat-card')) {
        const counter = detail.querySelector('h2');
        if (!counter.dataset.animated) { // éviter de répéter
            counter.dataset.animated = true;
            const targetValue = +counter.getAttribute('data-count');
            const suffix = (targetValue === 100 ? "%" : "+");
            let current = 0;

            const updateCount = () => {
                current += targetValue / 80;
                if (current < targetValue) {
                    counter.innerText = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = targetValue + suffix;
                }
            };

            updateCount();
        }
    }
});

const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if(body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

