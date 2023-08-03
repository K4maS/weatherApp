import azimuthToSideOfTheWorld from "../scripts/azimuthToSideOfTheWorld";

function WindDirection(props) {
  const azimut = props.azimut;
  return (
    <div className="card__wind-direction">
      <div
        className="card__wind-direction-circle"
        style={{ transform: `rotate(${azimut + 45}deg)` }}
      ></div>
      <span className="card__side-of-the-world">
        {azimuthToSideOfTheWorld(azimut)}
      </span>
    </div>
  );
}

export default WindDirection;
