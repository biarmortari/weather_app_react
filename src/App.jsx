import { useState, useRef } from "react";
import "./App.css";
import { api } from "./utils/Api";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import Weather5Days from "./components/Weather5Days/Weather5Days";

function App() {
  const inputRef = useRef();

  const [weather, setWeather] = useState({});
  const [weather5Days, setWeather5Days] = useState();

  async function searchCity() {
    try {
      const city = inputRef.current.value;

      const dataWeather = await api.getWeatherToday(city);
      const dataWeather5Days = await api.getWeather5Days(city);

      setWeather(dataWeather.data);
      setWeather5Days(dataWeather5Days.data);
    } catch (error) {
      console.error("Erro ao buscar cidade", error);
    }
  }

  return (
    <>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade"></input>
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherToday weather={weather} />}
      {weather5Days && <Weather5Days weather5Days={weather5Days} />}
    </>
  );
}

export default App;
