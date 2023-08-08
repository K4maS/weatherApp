import "../css/weatherSelect.css";
import SelectCard from "./SelectCard";
import { useState } from "react";
import { adaptiveSlider, cardsScroll } from "../scripts/cardsScroll";
import { useSelector } from "react-redux";
import LoadingModule from "../modules/LoadingModule";

function SelectBlock() {
  const hourlyList = useSelector(
    (state) => state.toolkit.currentCityWeatherHourly
  );
  const weekList = useSelector(
    (state) => state.toolkit.currentCityWeatherForWeek
  );

  const [list, setList] = useState(weekList);
  const [CurrentElem, setCurrentElem] = useState(1);

  return (
    <article className="weather-select">
      <div className="weather-select__top">
        <h2 className="weather__title title">Прогноз</h2>
        {JSON.stringify(weekList) !== "{}" && (
          <ul className="weather-select__list-top">
            <li className="weather-select__item item">
              <button
                className={`btn-reset item__gap-btn btn-for-week ${
                  list !== hourlyList ? "item__gap-btn--active" : ""
                } `}
                onClick={() => {
                  setList(weekList);
                }}
              >
                На неделю
              </button>
            </li>
            <li className="weather-select__item item ">
              <button
                className={`btn-reset item__gap-btn btn-for-week ${
                  list === hourlyList ? "item__gap-btn--active" : ""
                } `}
                onClick={() => {
                  setList(hourlyList);
                }}
              >
                Почасовой
              </button>
            </li>
          </ul>
        )}
      </div>

      <div className="weather-select__main">
        <button
          className={`bth-reset weather-select__slider-btn  weather-select__slider-btn-prev 
         ${1 >= CurrentElem ? "weather-select__slider-btn--disabled" : ""}`}
          onClick={() => {
            setCurrentElem(CurrentElem - 1);
            cardsScroll("left", list, CurrentElem);
          }}
          disabled={1 >= CurrentElem}
        ></button>
        {JSON.stringify(weekList) !== "{}" ? (
          <ul className="weather-select__slider-list list-for-day list-active">
            {list !== hourlyList
              ? weekList.map((elem) => (
                  <SelectCard
                    cardContent={elem}
                    cardType={"week"}
                    key={elem.dt_txt}
                    weekList={weekList}
                  />
                ))
              : hourlyList.map((elem) => (
                  <SelectCard
                    cardContent={elem}
                    cardType={"day"}
                    key={elem.dt_txt}
                  />
                ))}
          </ul>
        ) : (
          <LoadingModule />
        )}
        <button
          className={`bth-reset weather-select__slider-btn  weather-select__slider-btn-next ${
            list.length <= CurrentElem + adaptiveSlider()
              ? "weather-select__slider-btn--disabled"
              : ""
          }`}
          disabled={list.length <= CurrentElem + adaptiveSlider()}
          onClick={() => {
            setCurrentElem(CurrentElem + 1);
            cardsScroll("right", list, CurrentElem);
          }}
          
        ></button>
      </div>
    </article>
  );
}

export default SelectBlock;
