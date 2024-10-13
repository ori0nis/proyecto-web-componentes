import { aboutMe } from "../components/sections/aboutme/aboutme";
import { educationsection } from "../components/sections/educationsection/educationsection";
import { experiencesection } from "../components/sections/experiencesection/experiencesection";


export const renders = () => {
    const app = document.querySelector("#app");
    const aboutMeSection = document.createElement("section").innerHTML = aboutMe();
    app.insertAdjacentHTML("afterbegin", aboutMeSection);

    const aboutMeSectionRendered = document.querySelector("#aboutme");
    const educationSection = document.createElement("section").innerHTML = educationsection();
    aboutMeSectionRendered.insertAdjacentHTML("afterend", educationSection);

    const educationSectionRendered = document.querySelector("#educationsection");
    const experienceSection = document.createElement("section").innerHTML = experiencesection();
    educationSectionRendered.insertAdjacentHTML("afterend", experienceSection);
}

