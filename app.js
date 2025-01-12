//for hamburger
const menuToggle = document.getElementById('navbar-open');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isOpen = false;

menuToggle.addEventListener('click', () => {
    isOpen = menuToggle.checked;  // Use checkbox state directly
            
        if (isOpen) {
            line1.classList.add('translate-y-2','rotate-45');
            line2.classList.add('scale-x-0');
            line3.classList.add('-translate-y-2','-rotate-45');
            
        } else {
            line1.classList.remove('translate-y-2','rotate-45');
            line2.classList.remove('scale-x-0');
            line3.classList.remove('-translate-y-2','-rotate-45');
        }
    });


