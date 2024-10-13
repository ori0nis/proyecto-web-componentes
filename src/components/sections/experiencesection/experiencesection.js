import "./experiencesection.css";
import { button } from "../../button/button";
import CVContent from "../../../data/cvcontent";

export const experiencesection = () => {

    const experienceEntries = CVContent.workExperience;

    let HTMLContent = 
    `
        <section id="experiencesection">
            <h2>Experience</h2>      
        `

    experienceEntries.forEach(experience => {

        HTMLContent += 
        `
                <h2>Experience</h2>
                    <h3>${experience.startYear} - ${experience.endYear}</h3>
                    <p>${experience.aboutMyExperience}</p>
                    ${button(null, experience.link, experience.linkIcon)}       
        `
    });

    HTMLContent += `</section>`;
    return HTMLContent;
}