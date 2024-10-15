import "./projectcard.css";
import projects from "../../../data/projectdata";
import { button } from "../../button/button";

export const projectCard = () => {
    
    const HTMLContent = 
    `
    <div id="projects">
        <h2>My projects</h2>
        <div class="project-grid">
            ${projects.map((project) => `
                <div class="project-card">
                    <img src="${project.preview}" alt="project preview image">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <span class="project-card-button-see">${button("See project...", project.linkProject, null, "")}</span>
                    <span class="project-card-button-github">${button(null, project.linkGithub, project.linkIcon, "")}</span>
                </div>
            `).join('')}
        </div>
    </div>
    `;

    return HTMLContent;
}