(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const searchActivateBtn = document.querySelector('.weather-search-activate-btn');
        const searchBlock = document.querySelector('.weather-search-block');
        const searchBlockClose = document.querySelector('.weather-search-block-close-btn');

        searchActivateBtn.addEventListener('click', () => {
            searchBlock.classList.add('search-block--active');
        });
        searchBlockClose.addEventListener('click', () => {
            searchBlock.classList.remove('search-block--active');
        });
    })
})();