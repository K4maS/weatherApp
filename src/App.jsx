import "./App.css";
import Sprite from "./assets/img/svg/sprite";
import SidebarComponent from "./components/SidebarComponent";
import SelectBlock from "./components/SelectBlock";
import MoreDetailed from "./components/MoreDetailed";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_CITY,
  addCitiesList,
  changeTheme,
  updateDataLoaded,
} from "./store/slice";
import { themeChanger } from "./scripts/themeSwitcher";

function App() {
  const dispatch = useDispatch();
  const dataLoaded = useSelector((state) => state.toolkit.dataLoaded);
  const getCityName = useSelector((state) => state.toolkit.currentCity);

  // Загрузка данных при загрузке приложения
  if (!dataLoaded) {
    // Извлечение значения темы из локал сторадж
    if (localStorage.getItem("darkTheme")) {
      const darkThemeLocal = JSON.parse(localStorage.getItem("darkTheme"));
      dispatch(changeTheme(darkThemeLocal));
      themeChanger(darkThemeLocal);
    }
    // Извлечение списка городов из локал сторадж
    if (localStorage.getItem("citiesList")) {
      const savedCityList = JSON.parse(localStorage.getItem("citiesList"));
      // Тут новый getCityName, так как на той стороне нужен он
      const getCityName = savedCityList[savedCityList.length - 1];
      dispatch(addCitiesList(savedCityList));
      dispatch({ type: GET_CITY, getCityName });
    } else {
      dispatch({ type: GET_CITY, getCityName });
    }
    dispatch(updateDataLoaded(true));
  }
  return (
    <div className="App">
      <Sprite />
      <main className="main">
        <aside className="aside">
          {/* <!-- WEATHER ASIDE BEGIN --> */}
          <SidebarComponent />
          {/* <!-- WEATHER ASIDE END --> */}
        </aside>
        <div className="weather">
          <div className="container">
            {/* <!-- WEATHER SELECT BEGIN --> */}
            <SelectBlock />
            {/* <!-- WEATHER SELECT END --> */}
            {/* <!-- WEATHER MORE DETAILED BEGIN --> */}
            <MoreDetailed />
            {/* <!-- WEATHER MORE DETAILED END --> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
