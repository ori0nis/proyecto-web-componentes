import "./aboutme.css";
import CVContent from "../../../data/cvcontent";
import { button } from "../../button/button";

export const aboutMe = () => {
    const skills = CVContent.skills;

    const HTMLcontent = 
        `<div>
            <h2>About Me</h2>
            <img src="${CVContent.avatar}" alt="profile picture">
            <ul>
                ${skills.map(skill =>`
                        <li>${skill}</li>   
                `).join('')}
            </ul>    
            <p>${CVContent.aboutMe}</p>
            ${button("Contact me")}
        </div>`;
    return HTMLcontent;
};
    

