import { openSearchBlock } from "./searchBlock.js";
import { changingWeatherGap } from "./weatherGap.js";
import { changingTheme } from "./theme.js";

// Чтобы все работало нужно запускать через live Server

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        openSearchBlock();
        changingWeatherGap();
        changingTheme();
    })
})();