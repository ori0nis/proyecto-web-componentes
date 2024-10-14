import { aboutMe } from "../components/sections/aboutme/aboutme";
import { educationsection } from "../components/sections/educationsection/educationsection";
import { experiencesection } from "../components/sections/experiencesection/experiencesection";
import { projectCard } from "../components/sections/projects/projectcard";
import { button } from "../components/button/button";

// Contains the content renders + the button to toggle between sections

export const renders = () => {
    const app = document.querySelector("#app");

    const aboutMeSection = document.createElement("section");
    aboutMeSection.innerHTML = aboutMe();
    app.appendChild(aboutMeSection);

    const toggleSectionButtonContainer = document.createElement("div");
    toggleSectionButtonContainer.setAttribute("class", "change-section-button-container");
    toggleSectionButtonContainer.innerHTML = button("Show Experience", null, null, "change-section-button");
    app.appendChild(toggleSectionButtonContainer);

    const sectionsContainer = document.createElement("section");
    sectionsContainer.innerHTML = educationsection();
    sectionsContainer.setAttribute("id", "dynamic-section");
    sectionsContainer.classList.add("toggle");
    app.appendChild(sectionsContainer);

    const projectSection = document.createElement("section");
    projectSection.innerHTML = projectCard();
    projectSection.setAttribute("id", "project-section");
    app.appendChild(projectSection);

    const toggleButton = document.querySelector(".change-section-button");

    toggleButton.addEventListener("click", () => {

        const isEducationActive= sectionsContainer.classList.toggle("toggle");
        sectionsContainer.innerHTML = isEducationActive ? educationsection() : experiencesection();
        toggleButton.textContent = isEducationActive ? "Show experience" : "Show education";
    })
};





