import "./Weather5Days.css";

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

  return (
    <div>
      <h2>Previsão do Tempo para os Próximos 5 Dias</h2>
      <div></div>
    </div>
  );
}

export default Weather5Days;
