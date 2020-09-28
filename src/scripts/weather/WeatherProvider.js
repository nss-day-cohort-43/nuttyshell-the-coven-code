import defaultExport from "../Settings.js"

const keys = () => {
    return defaultExport.weatherKey
}
let weather = [];

export const useWeather = () => weather.slice();

export const getWeather = (zip) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${keys()}`)
  .then((response) => response.json()
  .then((parsedWeather) => {
      weather = parsedWeather.list
    })
  )
};