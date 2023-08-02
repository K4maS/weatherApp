import HumidityBar from "./HumidityBar";
function MoreDetailedList(props) {
  const weather = props.weather;
  return (
    <ul className="weather-more-detailed__detailed-list">
      <li className="weather-more-detailed__item item">
        <div className="item__card card">
          <h3 className="card__title">Скорость ветра</h3>
          <p className="card__indications">
            <span className="card__indication-number">{weather.wind.speed}</span>
            <span className="card__indication-symbol">м/с</span>
          </p>
          <div className="card__wind-direction">
            <div className="card__wind-direction-circle">
              <img src="./" alt="" className="card__wind-direction-arrow"></img>
            </div>
            <span className="card__side-of-the-world">СЗ</span>
          </div>
        </div>
      </li>
      <li className="weather-more-detailed__item item">
        <div className="item__card card">
          <h3 className="card__title">Влажность</h3>
          <p className="card__indications">
            <span className="card__indication-number">{weather.main.humidity}</span>
            <span className="card__indication-symbol">%</span>
          </p>
          <HumidityBar humidity={weather.main.humidity}/>
        </div>
      </li>
      <li className="weather-more-detailed__item item">
        <div className="item__card card">
          <h3 className="card__title">Видимость</h3>
          <p className="card__indications">
            <span className="card__indication-number">{((weather.visibility)/1000).toFixed(1)}</span>
            <span className="card__indication-symbol">км</span>
          </p>
        </div>
      </li>
      <li className="weather-more-detailed__item item">
        <div className="item__card card">
          <h3 className="card__title">Давление</h3>
          <p className="card__indications">
            <span className="card__indication-number">{weather.main.pressure}</span>
            <span className="card__indication-long-symbol">мм.рт.ст.</span>
          </p>
        </div>
      </li>
    </ul>
  );
}
export default MoreDetailedList;
