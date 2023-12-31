export function monthFormatter(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'января'
        case 2:
            return 'февраля';
        case 3:
            return 'марта';
        case 4:
            return 'апреля';
        case 5:
            return 'мая';
        case 6:
            return 'июня';
        case 7:
            return 'июля';
        case 8:
            return 'августа';
        case 9:
            return 'сентября';
        case 10:
            return 'октября';
        case 11:
            return 'ноября';
        case 12:
            return 'декабря';
        default:
            return 'error';
    }
}

export function dayOfTheWeekFormatter(dayOfTheWeekNumber) {
    switch (dayOfTheWeekNumber) {
        case 0:
            return 'Вс';
        case 1:
            return 'Пн'
        case 2:
            return 'Вт';
        case 3:
            return 'Ср';
        case 4:
            return 'Чт';
        case 5:
            return 'Пт';
        case 6:
            return 'Сб';
        default:
            return 'error';
    }
}