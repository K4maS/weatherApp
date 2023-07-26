import { useSelector } from "react-redux/es/hooks/useSelector";
import SearchListItem from "../modules/SearchListItem";
import '../css/searchList.css';

function SearchList() {
  const getCitiesList = useSelector((state) => state.toolkit.citiesList);

  return (
    <div className="weather-aside__search-list-block">
      <h2 className="weather-aside__search-list-title">Вы искали:</h2>
      <ul className="weather-aside__search-list">
        {getCitiesList.map((item) => (
          <SearchListItem key={item} cityName={item} />
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
