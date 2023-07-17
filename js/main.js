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


    function changingTheme() {
        const themeBtn = document.querySelector('.theme-changing-btn');
        themeBtn.addEventListener('click', function (e) {
            if (e.srcElement.checked) {
                document.documentElement.style.setProperty("--text", "rgba(230, 230, 230, 1)");
                document.documentElement.style.setProperty("--theme-toggle", "rgba(236, 110, 77, 1)");
                document.documentElement.style.setProperty("--btn-border", "rgba(172, 172, 172, 1)");
                document.documentElement.style.setProperty("--right-bg-color", "rgba(16, 14, 28, 1)");
                document.documentElement.style.setProperty("--aside-bg", "rgba(33, 35, 49, 1)");
                document.documentElement.style.setProperty("--card-color", "rgba(33, 35, 49, 1)");
                document.documentElement.style.setProperty("--shadow", "transporent");
                document.documentElement.style.setProperty("--gray-text", "rgba(109, 109, 109, 1)");
            }

            else {
                document.documentElement.style.setProperty("--text", " rgba(72, 72, 74, 1)");
                document.documentElement.style.setProperty("--theme-toggle", " rgba(72, 72, 74, 1)");
                document.documentElement.style.setProperty("--btn-border", " rgba(172, 172, 172, 1)");
                document.documentElement.style.setProperty("--right-bg-color", " rgba(241, 241, 241, 1)");
                document.documentElement.style.setProperty("--aside-bg", " #fff");
                document.documentElement.style.setProperty("--card-color", " #fff");
                document.documentElement.style.setProperty("--shadow", " rgba(0, 0, 0, 0.05)");
                document.documentElement.style.setProperty("--gray-text", " rgba(211, 211, 211, 1)");
            }
        })
    }

    document.addEventListener('DOMContentLoaded', () => {
        openSearchBlock();
        changingWeatherGap();
        changingTheme();
    })
})();