import { aboutMe } from "../components/sections/aboutme/aboutme";
import { cvsection } from "../components/sections/cvsection/cvsection";


export const renders = () => {
    const app = document.querySelector("#app");
    const aboutMeSection = document.createElement("section").innerHTML = aboutMe();
    app.insertAdjacentHTML("afterbegin", aboutMeSection);

    const aboutMeSectionRendered = document.querySelector("#aboutme");
    const CVSection = document.createElement("section").innerHTML = cvsection();
    aboutMeSectionRendered.insertAdjacentHTML("afterend", CVSection);
}

