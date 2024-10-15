import "./nav.css";
import { navButton } from "../button/button";
import { button } from "../button/button";
import { easterEggButton } from "../button/button";


export const nav = () =>
    `
    <nav id="nav">
        <h1><span class="word-one">Oihane</span> <span class="word-two">García</span> ${easterEggButton("de", "easter-egg")} <span class="easter-egg-kitty"><img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"></span><span class="word-four">Cáceres</span> <span class="word-five">López</span></h1>
        ${button("☀", null, null, "toggle-theme-button")}
            <ul>
                <li>
                    ${navButton("About me", "#aboutme", "section-button")}
                </li>
                <li>
                    ${navButton("Education", "#dynamic-section", "section-button")}
                </li>
                <li>
                    ${navButton("Experience", "#dynamic-section", "section-button")}
                </li>
                <li>
                    ${navButton("Projects", "#project-section", "section-button")}
                </li>
            </ul>
    </nav>
    `;


