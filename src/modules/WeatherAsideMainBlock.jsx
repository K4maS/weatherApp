import { useSelector } from "react-redux";
import "../css/weatherAside.css";

function WeatherAsideMainBlock() {
  const getCityData = useSelector((state) => state.toolkit.currentCityData);
  const CurrentCity = getCityData[0];
  return (
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
          {CurrentCity.display_name.split(",")[0]}
        </span>
      </div>
    </div>
  );
}

export default WeatherAsideMainBlock;
