import "./cvsection.css";
import { button } from "../button/button";
import CVContent from "../../../data/cvcontent";


export const cvsection = () =>
    `
    <h2>${CVContent.education}</h2>
    <h3>${CVContent.education.degree}</h3>
    <h4>${CVContent.education.university}</h4>
        <p>${CVContent.education.graduationYear}</p>
        ${button("Final degree project")}
    <h3></h3>
        <p></p>
`;
