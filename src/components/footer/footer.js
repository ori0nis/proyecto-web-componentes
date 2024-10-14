import "./footer.css";

const main = document.querySelector("main");

export const footer = main.insertAdjacentElement("afterend", document.createElement("footer"));

export const footerContent = () =>
    `
    <div id="footer-content">
        <p>©️Created by Oihane</p>
    </div>    
    `;