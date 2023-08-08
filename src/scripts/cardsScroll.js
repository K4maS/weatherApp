export function cardsScroll(point, elementsList, currentElem) {

    const list = document.querySelector('.weather-select__slider-list');
    const main = document.querySelector('.weather-select');
    let stepWidth = 124;
    console.log('лист' + main, elementsList.length, currentElem);

    if (point === 'right') { stepWidth = stepWidth * (-1) };
    list.scrollBy(stepWidth, 0);
}

export function adaptiveSlider() {
    if (window.innerWidth > 1390) {
        return 5;
    }
    if (window.innerWidth > 1196) {
        return 4;
    }
    return 2;
}