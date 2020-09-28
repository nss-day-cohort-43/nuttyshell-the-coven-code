// Authored by Terra Roush

import defaultExport from "../Settings.js"
// creates ability to use api key
const keys = () => {
    return defaultExport.weatherKey
}
// defines variable that can change as the data returned changes
let weather = [];
// this is a copy of the weather array
export const useWeather = () => weather.slice();
// a function that gets current weather when given a zipcode
export const getWeather = (zip) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${keys()}`)
  .then((response) => response.json()
  .then((parsedWeather) => {
      weather = parsedWeather.list
    })
  )
};