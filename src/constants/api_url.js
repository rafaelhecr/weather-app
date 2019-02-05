const location = "Mexico City,mx";

const api_key = "977c7398831d8f4f85665097c45dd25e";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

