import './style.css'
import { header } from './src/components/header/header';
import { nav } from './src/components/nav/nav';
import { renders } from './src/utils/renderfunction';
import { footer, footerContent } from './src/components/footer/footer';


header.innerHTML = nav();

// Button for theme toggle

const body = document.querySelector("body");
const toggleThemeButton = document.querySelector(".toggle-theme-button");

toggleThemeButton.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        toggleThemeButton.textContent = "☾";
    } else {
        toggleThemeButton.textContent = "☀";
    }
});

// Hehe

const easterEggButton = document.querySelector(".easter-egg");
const easterEggKitty = document.querySelector(".easter-egg-kitty");

easterEggButton.addEventListener("click", () => {
    const rect = easterEggButton.getBoundingClientRect();

    if (easterEggKitty.style.display === "block") {
        easterEggKitty.style.display = "none";
    } else {
        easterEggKitty.style.left = `${rect.left}px`;
        easterEggKitty.style.top = `${rect.bottom + window.scrollY}px`;
        easterEggKitty.style.display = "block";
    }    
});

renders();
footer.innerHTML = footerContent();