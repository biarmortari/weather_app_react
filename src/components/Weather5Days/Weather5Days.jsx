import "./Weather5Days.css";
import processForecastData from "../../utils/processForecastData";

function Weather5Days({ weather5Days }) {
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString("pt-BR");

    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }

    dailyForecast[date].push(forecast);
  }

  const nextFiveDays = Object.entries(dailyForecast).slice(1, 6);
  const processedData = processForecastData(nextFiveDays);

  return (
    <div>
      <h2>Previsão do Tempo para os Próximos 5 Dias</h2>
      <div>
        {processedData.map((day) => (
          <div key={day.dt}>
            <p>{day.weekday}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}.png`}
              alt={day.description}
            />
            <p>{day.description}</p>
            <p>
              {day.max}ºC máx / {day.min}ºC min
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather5Days;
