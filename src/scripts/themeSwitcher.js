import { darkThemeColors, lightThemeColors } from "./colorVariablesList.js";

function changeColorVariable({ name, value }) {
    document.documentElement.style.setProperty(name, value);
}

function changeVariablesList(variablesList) {
    variablesList.forEach(element => {
        const [name, value] = [element.name, element.value];
        changeColorVariable({ name, value })
    });
}

export function changingTheme(e) {
    if (e.target.checked) {
        changeVariablesList(lightThemeColors);
    }
    else {
        changeVariablesList(darkThemeColors);
    }
}