import { aboutMe } from "../components/sections/aboutme/aboutme";
import { educationsection } from "../components/sections/educationsection/educationsection";
import { experiencesection } from "../components/sections/experiencesection/experiencesection";
import { button } from "../components/button/button";

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
    sectionsContainer.setAttribute("id", "dynamic-section");
    sectionsContainer.innerHTML = educationsection();
    app.appendChild(sectionsContainer);

    const toggleButton = document.querySelector(".change-section-button");
    let showingEducation = true;

    toggleButton.addEventListener("click", () => {
        if (showingEducation) {
            sectionsContainer.innerHTML = experiencesection();
            toggleButton.innerText = "Show Education";
        } else {
            sectionsContainer.innerHTML = educationsection();
            toggleButton.innerText = "Show Experience";
        }
        showingEducation = !showingEducation;
    });
};




