import { useSelector } from "react-redux";
import "../css/weatherMoreDetailed.css";
import MoreDetailedList from "../modules/MoreDetailedList";
import LoadingModule from "../modules/LoadingModule";
import ErrorModule from "../modules/ErrorModule";
function MoreDetailed() {
  const getCityWeather = useSelector(
    (state) => state.toolkit.currentCityWeather
  );
  const getLoadingError = useSelector((state) => state.toolkit.loadingError);
  return (
    <article className="weather-more-detailed">
      <h2 className="weather-more-detailed__title weather__title title">
        Подробно на сегодня
      </h2>
      <div className="weather-more-detailed__main-block">
        {JSON.stringify(getCityWeather) != "{}" ? (
          <MoreDetailedList weather={getCityWeather} />
        ) : (
          <div className="weather-aside__warning-block">
            {!getLoadingError ? <LoadingModule /> : <ErrorModule />}
          </div>
        )}
      </div>
    </article>
  );
}

export default MoreDetailed;
