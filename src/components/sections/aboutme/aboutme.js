import "./aboutme.css";
import CVContent from "../../../data/cvcontent";
import { button } from "../../button/button";

export const aboutMe = () => 
    `<section id="aboutme">
        <div>
            <h2>About Me</h2>
            <img src="${CVContent.avatar}" alt="profile picture">
            <ul>
                <li>${CVContent.skills[0]}</li>
                <li>${CVContent.skills[1]}</li>
                <li>${CVContent.skills[2]}</li>
                <li>${CVContent.skills[3]}</li>
                <li>${CVContent.skills[4]}</li>
                <li>${CVContent.skills[5]}</li>
                <li>${CVContent.skills[6]}</li>
            </ul>
            <p>${CVContent.aboutMe}</p>
            ${button("Contact me")}
        <div>    
    </section>`;

