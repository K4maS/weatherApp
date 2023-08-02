import fog from "../assets/img/fog.png";
import storm from "../assets/img/storm.png";
import rain from "../assets/img/rain.png";

function SelectCard(props) {
  
  let elementImg;

  const data = props.cardContent;
  const [date, element, actualTemperature, feelsAsTemperature] = [
    data.date,
    data.element,
    data.actualTemperature,
    data.feelsAsTemperature,
  ];

  if (element === "fog") {
    elementImg = fog;
  } else if (element === "storm") {
    elementImg = storm;
  } else if (element === "rain") {
    elementImg = rain;
  }

  return (
    <li className="weather-select__item item">
      <a href="#" className="item__link">
        <div className="item__card card">
          <p className="card__time">{date}</p>
          <img src={elementImg} alt="" className="card__element-img"></img>
          <p className="card__temperature">
            <span className="card__acurate-temp">{actualTemperature}</span>
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
