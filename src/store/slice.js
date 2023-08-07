import { createAction, createSlice } from "@reduxjs/toolkit";
import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GEO_URL, WEATHER_API_KEY,  WEATHER_URL } from "../api/urls";

// Запрос для получения данных о городе
const fetchCityDataApi = (query) => axios.get(GEO_URL + `/search.php?q=${query}&format=json&addressdetails=1&limit=1`);
// Запрос для получения данных о погода по координатам
const fetchWeatherDataApi = (lat, lon, key) => axios.get(WEATHER_URL + `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`);
// Запрос для получения данных о погода по координатам
const fetchWeatherDataPerTreeHoursApi = (lat, lon, key) => axios.get(WEATHER_URL + `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`);


// Сага вотчер для данных о городе
export function* getCityDataWatcher(payload) {
    yield put(updateLoadingPocess(true));
    yield put(updateLoadingError(false));
    try {
        const data = yield call(fetchCityDataApi, payload.getCityName);
        const getCityData = data.data
        yield put(changeCurrentCityData(getCityData));
        yield put(changeCurrentCity(''))
        if (getCityData.length > 0) {
            yield put(updateCityExists(true));
            yield put({ type: GET_WEATHER, getCityData })
            yield put(updateSearchBlockIsActive(false));
        }
        else {
            yield put(updateCityExists(false));
        }

    }
    catch (er) {
        yield put(updateLoadingError(true));
    }
    finally {
        yield put(updateLoadingPocess(false));
    }
}

// Сага вотчер для данных о погоде в городе
export function* getCityWeatherWatcher(payload) {
    const data = payload.getCityData[0];
    const [lat, lon] = [data.lat, data.lon];

    yield put(updateLoadingPocess(true));
    yield put(updateLoadingError(false));
    try {
        const weatherData = yield call(fetchWeatherDataApi, lat, lon, WEATHER_API_KEY);
        const weatherDataForDays = yield call(fetchWeatherDataPerTreeHoursApi, lat, lon, WEATHER_API_KEY);
        const forDaysDataList = weatherDataForDays.data.list;
        const dataEveryTreeHours = forDaysDataList.splice(0,5);
        const dataEveryDays = forDaysDataList.filter((elem) => elem.dt_txt.includes("12:00"));

       
        yield put(updateCurrentCityWeather(weatherData.data));
        yield put(updateCurrentCityWeatherHourly(dataEveryTreeHours));
        yield put(updateCurrentCityWeatherForWeek(dataEveryDays));

     

    }
    catch (er) {
        yield put(updateLoadingError(true));
    }
    finally {
        yield put(updateLoadingPocess(false));
    }
}

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        currentCityData: [],
        currentCityWeather: {},
        currentCityWeatherHourly: {},
        currentCityWeatherForWeek: {},
        currentCity: 'Москва',
        citiesList: [],
        loadingProcess: false,
        loadingError: false,
        dataLoaded: false,
        searchBlockIsActive: false,
        darkTheme: false,
        cityExists: true,
        today: {
            dayOfTheWeek: new Date().getDay(),
            date: new Date().getDate(),
            month: new Date().getMonth() + 1,
        }
    },
    reducers: {
        // Получение из ари гео данных города
        changeTheme(state, action) {
            state.darkTheme = action.payload;
            localStorage.setItem('darkTheme', JSON.stringify(action.payload));
        },
        // Получение из ари гео данных города
        updateCityExists(state, action) {
            state.cityExists = action.payload;
        },
        // Получение из апи гео данных города и добавление города в список
        changeCurrentCityData(state, action) {
            if (action.payload.length > 0) {
                state.currentCityData = action.payload;
                const cityName = action.payload[0].display_name.split(',')[0];
                if (state.citiesList.length === 0) {
                    state.citiesList = [cityName]
                }
                else {
                    if (state.citiesList.length > 10) {
                        state.citiesList.shift();
                    }
                    if (state.citiesList.includes(cityName)) {
                        const indexToDelete = state.citiesList.indexOf(cityName);
                        state.citiesList.splice(indexToDelete, 1);
                    }
                    state.citiesList.push(cityName);

                }
                localStorage.setItem('citiesList', JSON.stringify(state.citiesList));
            }

        },
        // Изменение данных о погоде
        updateCurrentCityWeather(state, action) {
            state.currentCityWeather = action.payload;
        },  
        // Изменение данных о погоде каждые три часа
        updateCurrentCityWeatherHourly(state, action) {
            state.currentCityWeatherHourly = action.payload;
        }, 
         // Изменение данных о погоде на 5 дней
        updateCurrentCityWeatherForWeek(state, action) {
            state.currentCityWeatherForWeek = action.payload;
        },
        // Изменение статуса сообщения
        changeNotCityMessage(state, action) {
            state.notCityMessage = action.payload;
        },
        // Ввод названия города
        changeCurrentCity(state, action) {
            state.currentCity = action.payload;
        },
        // Добавление города в список поиска
        addCitiesList(state, action) {
            state.citiesList = action.payload
        },
        // Изменение статуса загрузки
        updateLoadingPocess(state, action) {
            state.loadingProcess = action.payload;
        },
        // Изменение статуса ошибки
        updateLoadingError(state, action) {
            state.loadingError = action.payload;
        },
        // Изменение статуса прогрузки данных
        updateDataLoaded(state, action) {
            state.dataLoaded = action.payload;
        },
        // Изменение статуса прогрузки данных
        updateSearchBlockIsActive(state, action) {
            state.searchBlockIsActive = action.payload;
        },
    }
})
export const GET_CITY = 'city/getCity';
export const getCity = createAction((data) => { return { type: GET_CITY, data } });
export const GET_WEATHER = 'city/getWeather';
export const getWeather = createAction((data) => { return { type: GET_WEATHER, data } });
export default toolkitSlice.reducer;
export const {
    changeCurrentCityData,
    changeCurrentCity,
    updateLoadingError,
    updateLoadingPocess,
    changeCitiesList,
    updateDataLoaded,
    updateSearchBlockIsActive,
    addCitiesList,
    changeTheme,
    updateCityExists,
    updateCurrentCityWeather,
    updateCurrentCityWeatherHourly,
    updateCurrentCityWeatherForWeek,
} = toolkitSlice.actions;

