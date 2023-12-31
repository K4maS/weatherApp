import {
  monthFormatter,
  dayOfTheWeekFormatter,
} from "../scripts/dateFormatter";
import wearherIcon from "../scripts/weatherIcon";

function SelectCard(props) {
  const data = props.cardContent;
  const cardType = props.cardType;
  const weekList = props.weekList;
  const dateSlicedList = data.dt_txt.slice(0, 10).split("-");
  const dateList = [dateSlicedList[2], dateSlicedList[1]];
  const dayOfTheWeek = new Date(data.dt_txt).getDay();
  let formettedDate = `${dayOfTheWeekFormatter(dayOfTheWeek)}, ${
    dateList[0]
  } ${monthFormatter(Number(dateList[`0`])).slice(0, 3)}`;
  if (cardType === "week" && weekList[0] === data) {
    formettedDate = "Завтра";
  }
  const [date, element, actualTemperature, feelsAsTemperature] = [
    cardType === "week" ? formettedDate : data.dt_txt.slice(10, 16),
    wearherIcon(data.weather[0].icon),
    String(data.main.temp).split(".")[0],
    String(data.main.feels_like).split(".")[0],
  ];

  return (
    <li className="weather-select__item item">
      <a href="#" className="item__link" onClick={(e) => e.preventDefault()}>
        <div className="item__card card">
          <p className="card__time">{date}</p>
          <img src={element} alt="" className="card__element-img"></img>
          <p className="card__temperature">
            <span className="card__acurate-temp">{actualTemperature}°C</span>
            {cardType !== "day" && (
              <span className="card__feeling-of-temp">
                {feelsAsTemperature}°C
              </span>
            )}
          </p>
        </div>
      </a>
    </li>
  );
}

export default SelectCard;
