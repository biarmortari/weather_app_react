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
  const [errorMessage, setErrorMessage] = useState("");

  async function searchCity() {
    setLoading(true);
    setErrorMessage("");
    try {
      const cityName = inputRef.current.value;

      const dataWeather = await api.getWeatherToday(cityName);
      const dataWeather5Days = await api.getWeather5Days(cityName);

      setWeather(dataWeather.data);
      setWeather5Days(dataWeather5Days.data);
    } catch (error) {
      console.error("Erro ao buscar cidade:", error);
      setErrorMessage("Cidade não encontrada. Tente novamente.");
    } finally {
      setLoading(false);
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
      {errorMessage && <p className="app_error">{errorMessage}</p>}
      {loading ? <Loading /> : ""}
      {weather && <WeatherToday weather={weather} />}
      {weather5Days && <Weather5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
