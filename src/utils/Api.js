import axios from "axios";

class Api {
  constructor() {
    this.baseUrl = "https://api.openweathermap.org/data/2.5/";
    this.key = "f42ad1f22fc352fd5f682cf50a37c48d";
  }

  _makeRequest(type, city) {
    const url = `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${this.key}&lang=pt_br&units=metric`;
    console.log("➡️ Fazendo requisição para:", url);
    return axios.get(url);
  }

  getWeatherToday(city) {
    return this._makeRequest("weather", city);
  }

  getWeather5Days(city) {
    return this._makeRequest("forecast", city);
  }
}

export const api = new Api();
