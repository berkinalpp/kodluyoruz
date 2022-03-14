import "./App.css";
import Search from "./components/Search";
import WeatherForecast from "./components/WeatherForecast";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Search />
      <WeatherForecast />
    </div>
  );
}

export default App;
