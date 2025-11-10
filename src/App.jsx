import { useState, useRef } from "react";
import "./App.css";
import { api } from "./utils/Api";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import Weather5Days from "./components/Weather5Days/Weather5Days";
import Loading from "./components/Loading/Loading";

function App() {
  const inputRef = useRef();

  const [weather, setWeather] = useState({});
  const [weather5Days, setWeather5Days] = useState();
  const [loading, setLoading] = useState(false);

  function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function searchCity() {
    setLoading(true);
    try {
      await esperar(3000);

      const city = inputRef.current.value;

      const dataWeather = await api.getWeatherToday(city);
      const dataWeather5Days = await api.getWeather5Days(city);

      setWeather(dataWeather.data);
      setWeather5Days(dataWeather5Days.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar cidade", error);
    }
  }

  return (
    <div className="app">
      <h1 className="app_title">Previsão do Tempo</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite a cidade"
        className="app_input"
      ></input>
      <button onClick={searchCity} className="app_button">
        Buscar
      </button>
      {weather && <WeatherToday weather={weather} />}
      {weather5Days && <Weather5Days weather5Days={weather5Days} />}
      {loading ? <Loading /> : ""}
    </div>
  );
}

export default App;
