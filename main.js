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

renders();
footer.innerHTML = footerContent();