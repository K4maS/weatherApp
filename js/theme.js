import { darkThemeColors, lightThemeColors } from "./variablesList.js";

function changeColorVariable({ name, value }) {
    document.documentElement.style.setProperty(name, value);
}

function changeVariablesList(variablesList) {
    variablesList.forEach(element => {
        const [name, value] = [element.name, element.value];
        changeColorVariable({ name, value })
    });
}

export function changingTheme() {
    const themeBtn = document.querySelector('.theme-changing-btn');
    themeBtn.addEventListener('click', function (e) {
        if (e.srcElement.checked) {
            changeVariablesList(lightThemeColors);
        }
        else {
            changeVariablesList(darkThemeColors);
        }
    })
}