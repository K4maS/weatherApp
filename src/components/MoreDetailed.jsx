import "../css/weatherMoreDetailed.css";
import "../css/media.css";

function MoreDetailed() {
  return (
    <article className="weather-more-detailed">
      <h2 className="weather-more-detailed__title weather__title title">
        Подробно на сегодня
      </h2>
      <div className="weather-more-detailed__main-block">
        <ul className="weather-more-detailed__detailed-list">
          <li className="weather-more-detailed__item item">
            <div className="item__card card">
              <h3 className="card__title">Скорость ветра</h3>
              <p className="card__indications">
                <span className="card__indication-number">7</span>
                <span className="card__indication-symbol">м/с</span>
              </p>
              <div className="card__wind-direction">
                <div className="card__wind-direction-circle">
                  <img
                    src="./"
                    alt=""
                    className="card__wind-direction-arrow"
                  ></img>
                </div>
                <span className="card__side-of-the-world">СЗ</span>
              </div>
            </div>
          </li>
          <li className="weather-more-detailed__item item">
            <div className="item__card card">
              <h3 className="card__title">Влажность</h3>
              <p className="card__indications">
                <span className="card__indication-number">84</span>
                <span className="card__indication-symbol">%</span>
              </p>
            </div>
          </li>
          <li className="weather-more-detailed__item item">
            <div className="item__card card">
              <h3 className="card__title">Видимость</h3>
              <p className="card__indications">
                <span className="card__indication-number">6.2</span>
                <span className="card__indication-symbol">км</span>
              </p>
            </div>
          </li>
          <li className="weather-more-detailed__item item">
            <div className="item__card card">
              <h3 className="card__title">Давление</h3>
              <p className="card__indications">
                <span className="card__indication-number">742</span>
                <span className="card__indication-long-symbol">мм.рт.ст.</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default MoreDetailed;
