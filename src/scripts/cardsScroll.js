export function cardsScroll(point, elementsList, currentElem) {

    const list = document.querySelector('.weather-select__slider-list');
    const main = document.querySelector('.weather-select');

    console.log('лист' + main, elementsList.length, currentElem);
    if (point === 'right') {
        list.scrollBy(124, 0);
    }

    else if (point === 'left') {
        list.scrollBy(-124, 0);
    }

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