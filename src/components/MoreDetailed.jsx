import { useSelector } from "react-redux";
import "../css/weatherMoreDetailed.css";
import MoreDetailedList from "../modules/MoreDetailedList";

function MoreDetailed() {
  const getCityWeather = useSelector(
    (state) => state.toolkit.currentCityWeather
  );

  return (
    <article className="weather-more-detailed">
      <h2 className="weather-more-detailed__title weather__title title">
        Подробно на сегодня
      </h2>
      <div className="weather-more-detailed__main-block">
          <MoreDetailedList weather={getCityWeather} />
      </div>
    </article>
  );
}

export default MoreDetailed;
