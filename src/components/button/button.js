import "./button.css";

export const button = (text = null, link = null, icon = null) => 
    `
    ${link ? `<a href="${link}" target="_blank" rel="noopener noreferrer">` : ""}
    <button type="button">
        ${icon ? `<img src="${icon}" alt="${text} icon" />` : ""}
        ${text ? `${text}` : ""}
    </button>
    ${link ? `</a>` : ""}
    `;

