import "../css/weatherSelect.css";
import SelectCard from "./SelectCard";
import { hourlyList, weekList } from "../api/fakeApi";
import { useState } from "react";

function SelectBlock() {
  const [currentList, setCurrentList] = useState(1);

  return (
    <article className="weather-select">
      <div className="weather-select__top">
        <h2 className="weather__title title">Прогноз</h2>
        <ul className="weather-select__list-top">
          <li className="weather-select__item item">
            <button
              className={`btn-reset item__gap-btn btn-for-week ${
                currentList === 1 ? "item__gap-btn--active" : ""
              } `}
              onClick={() => {
                setCurrentList(1);
              }}
            >
              На неделю
            </button>
          </li>
          <li className="weather-select__item item ">
            <button
              className={`btn-reset item__gap-btn btn-for-week ${
                currentList === 2 ? "item__gap-btn--active" : ""
              } `}
              onClick={() => {
                setCurrentList(2);
              }}
            >
              Почасовой
            </button>
          </li>
        </ul>
      </div>

      <div className="weather-select__main">
        <button className="bth-reset weather-select__slider-btn  weather-select__slider-btn-prev weather-select__slider-btn--disabled"></button>
        <ul
          className={`weather-select__slider-list list-for-week ${
            currentList === 2 ? "list-active" : ""
          } `}
        >
          {hourlyList.map((elem) => (
            <SelectCard cardContent={elem} key={elem.date} />
          ))}
        </ul>

        <ul
          className={`weather-select__slider-list list-for-week ${
            currentList === 1 ? "list-active" : ""
          } `}
        >
          {weekList.map((elem) => (
            <SelectCard cardContent={elem} key={elem.date} />
          ))}
        </ul>
        <button className="bth-reset weather-select__slider-btn  weather-select__slider-btn-next"></button>
      </div>
    </article>
  );
}

export default SelectBlock;
