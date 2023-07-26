import "../css/weatherAside.css";
import snowflake from "../assets/img/snowflake.webp";
import WeatherAsideMainBlock from "../modules/WeatherAsideMainBlock";
import { changingTheme } from "../scripts/themeSwitcher.js";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_CITY,
  changeCitiesList,
  changeCurrentCity,
  changeTheme,
  updateSearchBlockIsActive,
} from "../store/slice";
import SearchList from "../modules/SearchList";
import LoadingModule from "../modules/LoadingModule";
import NotFoundModule from "../modules/NotFoundModule";

function SidebarComponent() {
  const dispatch = useDispatch();
  const getCityName = useSelector((state) => state.toolkit.currentCity);
  const getCityData = useSelector((state) => state.toolkit.currentCityData);
  const getCitiesList = useSelector((state) => state.toolkit.citiesList);
  const getLoadingProcess = useSelector(
    (state) => state.toolkit.loadingProcess
  );
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
        <form
          className="weather-aside__search-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (getCityName) {
              getCity(getCityName);
              dispatch(changeCitiesList(getCityName));
            }
          }}
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
          <input
            type="text"
            placeholder="Найти город"
            className="input weather-aside__search-input"
            value={getCityName}
            onInput={(e) => {
              dispatch(changeCurrentCity(e.target.value));
            }}
          ></input>
          <button className="btn btn-reset weather-aside__search-btn">
            Найти
          </button>
        </form>
        {getCitiesList.length > 0 && <SearchList />}
      </div>
      <div className="weather-aside__search-activate-block">
        <button
          className="btn btn-reset weather-aside__search-btn  weather-search-activate-btn"
          onClick={() => {
            dispatch(updateSearchBlockIsActive(true));
          }}
        >
          Поиск города
        </button>
        <div className="weather-aside__theme-switch">
          <input
            type="checkbox"
            name=""
            id=""
            checked={`${darkTheme ? true : false}`}
            className="theme-changing-btn"
            onClick={(e) => {
              changingTheme(e.target.checked);
              dispatch(changeTheme(e.target.checked));
            }}
          ></input>
        </div>
      </div>
      {getCityData.length > 0 && (
        <img src={snowflake} alt="" className="weather-aside__img"></img>
      )}
      {getCityData.length > 0 ? (
        <WeatherAsideMainBlock />
      ) : (
        <div className="weather-aside__warning-block">
          {getLoadingProcess === true ? <LoadingModule /> : <NotFoundModule />}
        </div>
      )}
    </div>
  );
}

export default SidebarComponent;
