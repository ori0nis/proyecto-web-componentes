import "./experiencesection.css";
import { button } from "../../button/button";
import CVContent from "../../../data/cvcontent";

export const experiencesection = () => {

    const HTMLContent = 
    `
        <section id="experiencesection">
            <h2>Experience</h2>
            ${CVContent.workExperience.map(experience => `
                <div class="experience-entry">
                    <h3>${experience.startYear} - ${experience.endYear}</h3>
                    <p>${experience.aboutMyExperience}</p>
                    ${button(null, experience.link, experience.linkIcon)}
                </div>
            `).join('')}
        </section>
    `;

    return HTMLContent;
};
