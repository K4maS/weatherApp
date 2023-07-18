import fog from "../assets/img/fog.png";
import storm from "../assets/img/storm.png";
import rain from "../assets/img/rain.png";

function SelectCard(props) {
  let elementImg;
  const data = props.cardContent;
  const [date, elemelnt, actulaTemperature, feelsAsTemperature] = [
    data.date,
    data.elemelnt,
    data.actulaTemperature,
    data.feelsAsTemperature,
  ];

  if (elemelnt === "fog") {
    elementImg = fog;
  } else if (elemelnt === "storm") {
    elementImg = storm;
  } else if (elemelnt === "rain") {
    elementImg = rain;
  }
  return (
    <li className="weather-select__item item">
      <a href="#" className="item__link">
        <div className="item__card card">
          <p className="card__time">{date}</p>
          <img src={elementImg} alt="" className="card__element-img"></img>
          <p className="card__temperature">
            <span className="card__acurate-temp">{actulaTemperature}</span>
            {feelsAsTemperature && (
              <span className="card__feeling-of-temp">{feelsAsTemperature}</span>
            )}
          </p>
        </div>
      </a>
    </li>
  );
}

export default SelectCard;
