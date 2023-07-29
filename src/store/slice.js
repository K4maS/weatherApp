import { createAction, createSlice } from "@reduxjs/toolkit";
import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GEO_URL } from "../api/urls";

// Запрос для получения данных о городе
const fetchCityDataApi = (query) => axios.get(GEO_URL + `/search.php?q=${query}&format=json&addressdetails=1&limit=1`)


// Сага вотчер для данных о городе
export function* getCityDataWatcher(payload) {
    yield put(updateLoadingPocess(true));
    yield put(updateLoadingError(false));
    try {
        const data = yield call(fetchCityDataApi, payload.getCityName);
        yield put(changeCurrentCityData(data.data))
        yield put(changeCurrentCity(''))
        if (data.data.length > 0) {
            yield put(updateSearchBlockIsActive(false));
            yield put(updateCityExists(true));
        }
        else {
            yield put(updateCityExists(false));
        }

    }
    catch (er) {
        console.log(er)
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
        currentCity: 'Москва',
        citiesList: [],
        loadingProcess: false,
        loadingError: false,
        dataLoaded: false,
        searchBlockIsActive: false,
        darkTheme: false,
        cityExists: true,
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
                    if (!state.citiesList.includes(cityName)) {
                        if (state.citiesList.length > 10) {
                            state.citiesList.shift()
                        }
                        state.citiesList.push(cityName);
                    }
                }
                localStorage.setItem('citiesList', JSON.stringify(state.citiesList));
            }

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
export const getCity = createAction((query) => { return { type: GET_CITY, query } });
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
} = toolkitSlice.actions;

