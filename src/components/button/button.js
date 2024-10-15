import "./button.css";

// I decided to create a specific button for the nav to not have to make my button more complex with more ternaries:

export const navButton = (text, link, className = "") =>
    `
    <a href="${link}">
    <button type="button" class="${className}">${text}</button>
    </a>
    `;

export const button = (text = null, link = null, icon = null, className = "") => 
    `
    ${link ? `<a href="${link}" target="_blank" rel="noopener noreferrer">` : ""}
    <button type="button" class="${className}">
        ${icon ? `<img src="${icon}" alt="${text} icon" />` : ""}
        ${text ? `${text}` : ""}
    </button>
    ${link ? `</a>` : ""}
    `;

export const easterEggButton = (text, className) => 
    `
    <button type="button" class="${className}">${text}</button>
    `