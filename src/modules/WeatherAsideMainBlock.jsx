import "../css/weatherAside.css";

function WeatherAsideMainBlock(props) {
  const weather = props.weather;
  const city = props.city;

  return (
    <div className="weather-aside__main-block">
      <div className="weather-aside__state">
        <p className="weather-aside__degrees">
          {Math.round(weather.main.temp)}
          <span className="weather-aside__degree-symbol">
            <span>°</span>C
          </span>
        </p>
        <p className="weather-aside__degrees-subtext-1">
          {weather.weather[0].description}
        </p>
        <p className="weather-aside__degrees-subtext-2 weather-aside__gray-text ">
          Ощущается как {Math.round(weather.main.feels_like)} °C
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
          {city.display_name.split(",")[0]}
        </span>
      </div>
    </div>
  );
}

export default WeatherAsideMainBlock;
