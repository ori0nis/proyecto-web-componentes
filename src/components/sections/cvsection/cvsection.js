import "./cvsection.css";
import { button } from "../../button/button";
import CVContent from "../../../data/cvcontent";

export const cvsection = () => {
    const educationEntries = CVContent.education;

    let HTMLcontent = 
        `
        <section id="cvsection">
            <h2>Education</h2>
        `
    
    educationEntries.forEach(educationEntry => {
        HTMLcontent += 
        `
        <div class="education-entry">
            <h3>${educationEntry.degree}</h3>
            <h4>${educationEntry.university}</h4>
            <p>Graduation year: ${educationEntry.graduationYear}</p>
        `;

        if (educationEntry.finalDegreeProject) {
            HTMLcontent += 
            `
            <span class="finaldegreeproject">${button("Final degree project", educationEntry.finalDegreeProject, null)}</span>
            `;
        }
            HTMLcontent += `</div>`;
    });

        HTMLcontent += `</section>`;
        return HTMLcontent;
};


