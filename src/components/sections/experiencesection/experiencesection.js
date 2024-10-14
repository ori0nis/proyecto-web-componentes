import "./experiencesection.css";
import { button } from "../../button/button";
import CVContent from "../../../data/cvcontent";

export const experiencesection = () => {

    const HTMLContent = 
    `
        <div id="experience-section" class="experience-section">
            <div class="experience-entry">
                <h2>Experience</h2>
                ${CVContent.workExperience.map(experience => `
                    <h3>${experience.startYear} - ${experience.endYear}</h3>
                    <p>${experience.aboutMyExperience}</p>
                    ${button(null, experience.link, experience.linkIcon, "")}
            </div>        
            `).join('')} 
        </div>
    `;

    return HTMLContent;
};
