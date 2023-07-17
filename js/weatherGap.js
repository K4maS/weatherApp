export const weekSwitchBtn = document.querySelector('.btn-for-week');
export const hourlySwitchBtn = document.querySelector('.btn-hourly');
export const forWeekList = document.querySelector('.list-for-week');
export const hourlyList = document.querySelector('.list-hourly');

export function changingWeatherGap() {


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