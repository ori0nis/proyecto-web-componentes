import "./aboutme.css";
import CVContent from "../../../data/cvcontent";

export const aboutMe = () => 
    `<section id="aboutme">
        <div>
            <h2>About Me</h2>
            <img src="https://avatars.githubusercontent.com/u/69155189?v=4" alt="profile picture">
            <ul>
                <li>${CVContent.skills[0]}</li>
                <li>${CVContent.skills[1]}</li>
                <li>${CVContent.skills[2]}</li>
                <li>${CVContent.skills[3]}</li>
                <li>${CVContent.skills[4]}</li>
                <li>${CVContent.skills[5]}</li>
                <li>${CVContent.skills[6]}</li>
            </ul>
            <p>${CVContent.aboutMe}</p>
            <button type="button">Contact me</button>
        <div>    
    </section>`;

