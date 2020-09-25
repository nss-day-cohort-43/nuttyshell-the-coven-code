// By Audrey Thomasson
// This module contains the html for one event and listens for the 
// click to delete the event
// Eventually it will listen for the click to display the weather for 
// that event

import { deleteEvent } from "./EventDataProvider.js"

const eventContainer = document.querySelector(".events")

eventContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "deleteEntry") {
        const removeThisEvent = clickEvent.target.value
        deleteEvent(removeThisEvent)
    }
})


// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "weather") {
//         const weatherZip = clickEvent.target.value

            // CHECK IN HERE IF THE DATE OF THE EVENT IS CLOSE ENOUGH

//         weatherDetail(weatherZip)
//     }
// })



// HTML for a single event with delete and weather buttons
export const singleEventHTML = (event) => {
    return `
    <section class="event-card">
        <div id="entry--${event.id}" class="singleEvent">
        <div>Event: ${event.name}</div>
        <div>Date: ${event.date}, ${event.time}</div>
        <div>Location: ${event.locationName}</div>
        <button type="button" id=weather" value="event.zip">Weather</button>
        <button type="button" id="deleteEvent" value="${event.id}">X</button>
        <br>
        </section>
        
        `
}