import { useDispatch } from "react-redux";
import { GET_CITY } from "../store/slice";

function SearchListItem(props) {
  const getCityName = props.cityName;
  const dispatch = useDispatch();

  return (
    <li className="weather-aside__search-item item" key={getCityName}>
      <button
        className="btn-reset item__btn weather-aside__gray-text"
        onClick={() => {
          dispatch({ type: GET_CITY, getCityName });
          console.log(getCityName);
        }}
      >
        {getCityName}
      </button>
    </li>
  );
}

export default SearchListItem;
