import "./WeatherToday.css";

function WeatherToday({ weather }) {
  return (
    <div>
      <h2>{weather?.name}</h2>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p>{weather.main.temp}ºC</p>
      </div>
      <p>{weather.weather[0].description}</p>
      <div>
        <p>Sensação térmica: {weather.main.feels_like}ºC</p>
        <p>Umidade: {weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherToday;
