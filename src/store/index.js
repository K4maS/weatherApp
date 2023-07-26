import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice, { GET_CITY, getCityDataWatcher } from './slice';
import { takeEvery } from 'redux-saga/effects';
import createSagaMiddlewaer from 'redux-saga';

const sagaMiddleware = createSagaMiddlewaer();

function* sagas() {
    yield takeEvery(GET_CITY, getCityDataWatcher)
}

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(sagas)