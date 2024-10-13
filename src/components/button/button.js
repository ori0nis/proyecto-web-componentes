import "./button.css";

export const button = (text = null, link = null, icon = null, className = "") => 
    `
    ${link ? `<a href="${link}" target="_blank" rel="noopener noreferrer">` : ""}
    <button type="button" class="${className}">
        ${icon ? `<img src="${icon}" alt="${text} icon" />` : ""}
        ${text ? `${text}` : ""}
    </button>
    ${link ? `</a>` : ""}
    `;

