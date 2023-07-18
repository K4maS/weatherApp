import './App.css';
import Sprite from './assets/img/svg/sprite';
import SidebarComponent from './components/SidebarComponent';
import SelectBlock from './components/SelectBlock';
import MoreDetailed from './components/MoreDetailed';
function App() {
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
