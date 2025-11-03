export default function processForecastData(nextFiveDays) {
  return nextFiveDays.map(([date, forecast]) => {
    const tempsMax = forecast.map((f) => f.main.temp_max);
    const tempsMin = forecast.map((f) => f.main.temp_min);

    const max = Math.round(Math.max(...tempsMax));
    const min = Math.round(Math.min(...tempsMin));

    const midForecast = forecast[Math.floor(forecast.length / 2)];
    const icon = midForecast.weather[0].icon;
    const description = midForecast.weather[0].description;

    return {
      date,
      weekday: new Date(date).toLocaleDateString("pt-BR", {
        weekday: "long",
      }),
      max,
      min,
      midForecast,
      icon,
      description,
      dt: midForecast.dt,
    };
  });
}
