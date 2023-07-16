(() => {
    function openSearchBlock() {
        const searchActivateBtn = document.querySelector('.weather-search-activate-btn');
        const searchBlock = document.querySelector('.weather-search-block');
        const searchBlockClose = document.querySelector('.weather-search-block-close-btn');

        searchActivateBtn.addEventListener('click', () => {
            searchBlock.classList.add('search-block--active');
        });
        searchBlockClose.addEventListener('click', () => {
            searchBlock.classList.remove('search-block--active');
        });
    }

    function changingWeatherGap() {
        const weekSwitchBtn = document.querySelector('.btn-for-week');
        const hourlySwitchBtn = document.querySelector('.btn-hourly');
        const forWeekList = document.querySelector('.list-for-week');
        const hourlyList = document.querySelector('.list-hourly');

        weekSwitchBtn.addEventListener('click', () => {
            forWeekList.classList.add('list-active');
            hourlyList.classList.remove('list-active');
            weekSwitchBtn.classList.add('item__gap-btn--active');
            hourlySwitchBtn.classList.remove('item__gap-btn--active');
            weekSwitchBtn.setAttribute('disabled', 'true');
            hourlySwitchBtn.removeAttribute('disabled');
        });
        hourlySwitchBtn.addEventListener('click', () => {
            forWeekList.classList.remove('list-active');
            hourlyList.classList.add('list-active');
            weekSwitchBtn.classList.remove('item__gap-btn--active');
            hourlySwitchBtn.classList.add('item__gap-btn--active');
            hourlySwitchBtn.setAttribute('disabled', 'true');
            weekSwitchBtn.removeAttribute('disabled');
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        openSearchBlock();
        changingWeatherGap();
    })
})();