import "../css/weatherAside.css";
// import "../css/media.css";
import snowflake from "../assets/img/snowflake.webp";
import { useState } from "react";
import { changingTheme } from "../scripts/themeSwitcher.js";

function SidebarComponent() {
  const [SearchBlockIsActive, serSearchBlockIsActive] = useState(false);

  return (
    <div className="weather-aside">
      <div
        className={`weather-aside__search-block weather-search-block ${
          SearchBlockIsActive ? "search-block--active" : ""
        }`}
      >
        <button
          className="btn btn-reset weather-aside__close-btn weather-search-block-close-btn"
          onClick={() => {
            serSearchBlockIsActive(false);
          }}
        >
          <svg>
            <use xlinkHref="#cross"></use>
          </svg>
        </button>
        <input
          type="search"
          placeholder="Найти город"
          className="input weather-aside__search-input"
        ></input>
        <button className="btn btn-reset weather-aside__search-btn">
          Найти
        </button>
      </div>

      <div className="weather-aside__search-activate-block">
        <button
          className="btn btn-reset weather-aside__search-btn  weather-search-activate-btn"
          onClick={() => {
            serSearchBlockIsActive(true);
          }}
        >
          Поиск города
        </button>
        <div className="weather-aside__theme-switch">
          <input
            type="checkbox"
            name=""
            id=""
            className="theme-changing-btn"
            onClick={(e) => {
              changingTheme(e);
            }}
          ></input>
        </div>
      </div>
      <img src={snowflake} alt="" className="weather-aside__img"></img>
      <div className="weather-aside__main-block">
        <div className="weather-aside__state">
          <p className="weather-aside__degrees">
            1
            <span className="weather-aside__degree-symbol">
              <span>°</span>C
            </span>
          </p>
          <p className="weather-aside__degrees-subtext-1">Снег</p>
          <p className="weather-aside__degrees-subtext-2 weather-aside__gray-text ">
            Ощущается как -3 °C
          </p>
        </div>
        <div className="weather-aside__bottom">
          <div className="weather-aside__date">
            <span className="weather-aside__aside-text weather-aside__gray-text">
              Сегодня
            </span>
            <span className="weather-aside__aside-date weather-aside__gray-text">
              Вс, 13 мар
            </span>
          </div>
        </div>
        <div className="weather-aside__location">
          <svg className="weather-aside__baloon">
            <use xlinkHref="#baloon"> </use>
          </svg>
          <span className="weather-aside__location-name weather-aside__gray-text">
            Москва
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
