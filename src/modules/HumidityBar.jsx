import "../css/humidityBar.css";

function HumidityBar(props) {
  const humidity = props.humidity;
  return (
    <div className="card__humidity">
      <div className="card__humidity-numbbers">
        <span className="card__humidity-number">0</span>
        <span className="card__humidity-number">50</span>
        <span className="card__humidity-number">100</span>
      </div>
      <div className="card__humidity-bar">
        <div
          className="card__humidity-bar-meter-reading"
          style={{ width: `${humidity}%` }}
          
        ></div>
      </div>
      <p className="card__humidity-percent">%</p>
    </div>
  );
}

export default HumidityBar;
