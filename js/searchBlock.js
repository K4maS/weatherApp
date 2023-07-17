export const searchActivateBtn = document.querySelector('.weather-search-activate-btn');
export const searchBlock = document.querySelector('.weather-search-block');
export const searchBlockClose = document.querySelector('.weather-search-block-close-btn');

export function openSearchBlock() {
    searchActivateBtn.addEventListener('click', () => {
        searchBlock.classList.add('search-block--active');
    });
    searchBlockClose.addEventListener('click', () => {
        searchBlock.classList.remove('search-block--active');
    });
}