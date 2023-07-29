import { useSelector } from "react-redux/es/hooks/useSelector";
import SearchListItem from "../modules/SearchListItem";
import "../css/searchList.css";

function SearchList() {
  const getCitiesList = useSelector((state) => state.toolkit.citiesList);
  let citiesListFiltered = getCitiesList;
  if (getCitiesList.length > 5) {
    citiesListFiltered = getCitiesList.slice(
      getCitiesList.length - 5,
      getCitiesList.length
    );
  }

  return (
    <div className="weather-aside__search-list-block">
      <ul className="weather-aside__search-list">
        {citiesListFiltered.map((item) => (
          <SearchListItem key={item} cityName={item} />
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
