import "./WeatherToday.css";

function WeatherToday({ weather }) {
  if (!weather || !weather.weather || !weather.weather[0]) {
    return null;
  }
  return (
    <div className="today_container">
      <h2 className="today_title">{weather?.name}</h2>
      <div className="today_info">
        <img
          className="today_img"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p className="today_temp">{Math.round(weather.main.temp)}ºC</p>
      </div>
      <div className="today_info-sub">
        <p className="today_description">{weather.weather[0].description}</p>
        <p className="today_feels-like">
          Sensação térmica: {Math.round(weather.main.feels_like)}ºC
        </p>
        <p className="today_humidity">
          Umidade: {Math.round(weather.main.humidity)}%
        </p>
      </div>
    </div>
  );
}

export default WeatherToday;
