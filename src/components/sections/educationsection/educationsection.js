import "./educationsection.css";
import { button } from "../../button/button";
import CVContent from "../../../data/cvcontent";

export const educationsection = () => {
    const educationEntries = CVContent.education;

    const HTMLcontent = 
    `
        <section id="educationsection">
            <h2>Education</h2>
            ${educationEntries.map(educationEntry => `
                <div class="education-entry">
                    <h3>${educationEntry.degree}</h3>
                    <h4>${educationEntry.university}</h4>
                    <p>Graduation year: ${educationEntry.startYear === 2013 ? `${educationEntry.startYear}/` : ""}${educationEntry.endYear}</p>
                    ${educationEntry.relevantCourses ? `
                        <div class="relevant-courses">
                            <h3>Relevant courses:</h3>
                            <ul>
                                ${educationEntry.relevantCourses.map(course =>`<li>${course}</li>`).join('')}
                            </ul>
                        </div>` 
                    : ""}
                    ${educationEntry.finalDegreeProject ? `
                        <span class="finaldegreeproject">${button("Final degree project", educationEntry.finalDegreeProject, null)}</span>` 
                    : ""}
                </div>
            `).join('')}
        </section>
    `;

    return HTMLcontent;
};