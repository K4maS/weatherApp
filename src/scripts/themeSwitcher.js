import {themeVariables } from "./colorVariablesList.js";

function changeColorVariable(element, themeType) {
    document.documentElement.style.setProperty(element, `var(${element}-${themeType})`);
}

function changeVariablesList(themeType) {
    themeVariables.forEach(element => {
        changeColorVariable(element, themeType)
    });
}

export function changingTheme(checked) {
    if (checked) {
        changeVariablesList('dark');
    }
    else {
        changeVariablesList('light');
    }
    
}