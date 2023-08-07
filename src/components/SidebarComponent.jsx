import "../css/weatherAside.css";
import snowflake from "../assets/img/snowflake.webp";
import WeatherAsideMainBlock from "../modules/WeatherAsideMainBlock";
import { themeChanger } from "../scripts/themeSwitcher.js";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_CITY,
  changeCurrentCity,
  changeTheme,
  updateCityExists,
  updateSearchBlockIsActive,
} from "../store/slice";
import SearchList from "../modules/SearchList";
import LoadingModule from "../modules/LoadingModule";
import ErrorModule from "../modules/ErrorModule";
import { inputValidation } from "../scripts/inputValidation";
import CityNotFound from "../modules/CityNotFound";

function SidebarComponent() {
  const dispatch = useDispatch();
  const getCityName = useSelector((state) => state.toolkit.currentCity);
  const getCityData = useSelector((state) => state.toolkit.currentCityData);
  const getCityWeather = useSelector(
    (state) => state.toolkit.currentCityWeather
  );
  const getCitiesList = useSelector((state) => state.toolkit.citiesList);
  const getCitiesExists = useSelector((state) => state.toolkit.cityExists);
  const getLoadingError = useSelector((state) => state.toolkit.loadingError);
  const getSearchBlockIsActive = useSelector(
    (state) => state.toolkit.searchBlockIsActive
  );
  const darkTheme = useSelector((state) => state.toolkit.darkTheme);

  const getCity = () => {
    dispatch({ type: GET_CITY, getCityName });
  };

  return (
    <div className="weather-aside">
      <div
        className={`weather-aside__search-block weather-search-block ${
          getSearchBlockIsActive ? "search-block--active" : ""
        }`}
      >
        <button
          className="btn btn-reset weather-aside__close-btn weather-search-block-close-btn"
          onClick={() => {
            dispatch(updateSearchBlockIsActive(false));
          }}
        >
          <svg>
            <use xlinkHref="#cross"></use>
          </svg>
        </button>
        <form
          className="weather-aside__search-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (getCityName) {
              getCity(getCityName);
            }
          }}
        >
          <label htmlFor="search" className="weather-aside__search-input-label">
            {!getCitiesExists && <CityNotFound />}
            <input
              type="text"
              name="search"
              placeholder="Найти город"
              className="input weather-aside__search-input"
              value={getCityName}
              onInput={(e) => {
                dispatch(updateCityExists(true));
                const allowedSymbol = inputValidation(e);
                if (allowedSymbol) {
                  dispatch(changeCurrentCity(e.target.value));
                } else {
                  e.preventDefault();
                }
                setTimeout(() => {
                  dispatch(updateCityExists(true));
                }, 5000);
              }}
            ></input>
          </label>
          <button className="btn btn-reset weather-aside__search-btn">
            Найти
          </button>
        </form>
        {getCitiesList.length > 0 && <SearchList />}
      </div>
      <div className="weather-aside__search-activate-block">
        <button
          className="btn btn-reset weather-aside__search-btn  weather-search-activate-btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateSearchBlockIsActive(true));
          }}
        >
          Поиск города
        </button>
        <div className="weather-aside__theme-switch">
          {/* Переключатель тем */}
          <input
            type="checkbox"
            name=""
            id=""
            checked={darkTheme}
            className="theme-changing-btn"
            onChange={(e) => {
              themeChanger(e.target.checked);
              dispatch(changeTheme(e.target.checked));
            }}
          ></input>
        </div>
      </div>
      {(getCityData.length > 0 && JSON.stringify(getCityWeather) !== "{}") >
        0 && <img src={snowflake} alt="" className="weather-aside__img"></img>}
      {getCityData.length > 0 && JSON.stringify(getCityWeather) !== "{}" ? (
        <WeatherAsideMainBlock weather={getCityWeather} city={getCityData[0]} />
      ) : (
        <div className="weather-aside__warning-block">
          {!getLoadingError ? <LoadingModule /> : <ErrorModule />}
        </div>
      )}
    </div>
  );
}

export default SidebarComponent;
