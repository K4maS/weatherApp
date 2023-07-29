import '../css/loadingModule.css';

function loadingModule() {
  return (
    <div className="weather-aside__warning">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default loadingModule;
