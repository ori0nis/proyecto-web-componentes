//import CVContent from "../../../data/cvcontent";
import { aboutMe } from "../components/sections/aboutme/aboutme";


export const renders = () => {
    const app = document.querySelector("#app");
    const aboutMeSection = document.createElement("section").innerHTML = aboutMe();
    app.insertAdjacentHTML("afterbegin", aboutMeSection);
}

/* const main = document.querySelector("main");
main.innerHTML = aboutMe(); */