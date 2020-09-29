// Authored by Audrey Thomasson

// weatherDetail calls getWeather to get the 5 day weather for the
// zip code of the event. It then filters weather array for the matching date
// and the 1pm time for that day (because the array will have the weather from
// every 3 hours and I just want a single time to display... or it could also pass
// the specific event time....


export const weatherDetail = (zipCode, eventDate) => {
    getWeather(zipCode)
    const date = eventDate

    .then(() => {
        const weatherArray = useWeather()
            return weatherArray
    })
    .then((weatherArray) => {
        const forecastDetails = weatherArray.filter(tacoReport => {
            const forecast = tacoReport.dt_txt
            if (forecast.includes("date") && forecast.includes("13:00:00")) {
            return forecast
            }
        })
        // call the renderWeather function and pass in
        // the weather for 1pm on the day matching the event
        renderWeather(forecastDetails)
      
    })
}


// write a renderWeather function HERE to add the WeatherDetails for a
// particular event on the DOM
