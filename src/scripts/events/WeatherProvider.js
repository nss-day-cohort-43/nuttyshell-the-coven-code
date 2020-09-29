// Authored by Audrey Thomasson

// Weather call for extended 5 day/ every 3 hour forecast to be used for upcoming events

import {keys} from "../Settings.js";

let weather = [];
const weatherKey = keys.weatherKey;

export const getWeather = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weather = parsedResponse.list;
    })
}

export const useWeather = () => {
    return weather.slice();
}
