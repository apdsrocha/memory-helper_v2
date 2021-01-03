import store from "../store/store.js";

const KEY = "ab4799176cd5cf774957846b3fde04b1";

export default class EntriesService {
  static async getWeather(location) {
    let urlPost = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${KEY}`;
    const resposta = await fetch(urlPost);
    let dadosServidor = await resposta.json();
    if (dadosServidor.cod === '404') {
      throw new Error(dadosServidor.message);
    }
    return dadosServidor;
  }
  static async getEntries() {
    return store.getState();
  }
}
