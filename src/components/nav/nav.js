import "./nav.css";
import { button } from "../button/button";

export const nav = () =>
    `<nav id="nav">
      <h1><span class="word-one">Oihane</span> <span class="word-two">García</span> <span class="word-three">de</span> <span class="word-four">Cáceres</span> <span class="word-five">López</span></h1>
      <ul>
        <li>
            ${button("About me")}
        </li>
        <li>
            ${button("Education")}
        </li>
        <li>
            ${button("Experience")}
        </li>
        <li>
            ${button("Projects")}
        </li>
      </ul>
    </nav>`;

//TODO: AÑADIR EL BOTÓN DE W/B MODE

