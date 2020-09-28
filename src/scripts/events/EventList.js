// By Audrey Thomasson
// This is the module for the list of all the events for a 
// user and eventually their friends

import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js";
import { eventForm } from "./EventForm.js";
import { eventBoxHTML } from "./EventHTML.js";

// DOM reference to the event container
const eventHub = document.querySelector(".events") 
const eventContainer = document.querySelector(".events") 

// listens for either a saveEvent or deleteEvent and then re-renders the 
// updated list of events
eventHub.addEventListener('entryStateChanged', event => {
    const userId = sessionStorage.getItem("id") 
    EventList(userId)
})


// Listens for a click on the + sign and dispatches the notice so the form
// can be rendered so an event can be added
eventContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEvent") {
        eventForm()
    }

    // Listens for a click on the delete button & calls deleteEvent
    // to remove from database
    if (clickEvent.target.id === "deleteEvent") {
        const removeThisEvent = clickEvent.target.value
        deleteEvent(removeThisEvent)
    }

    if (clickEvent.target.id === "weather") {
        const weatherZip = clickEvent.target.value

            // CHECK IN HERE IF THE DATE OF THE EVENT IS CLOSE ENOUGH

        weatherDetail(weatherZip)
    }
})





// this EventList is called by the main.js to render the initial
// list of entries of the active user
export const EventList = (userId) => {
    getEvents(userId)
    .then(useEvents)
    .then(render)
}

// calls eventBoxHTMl from EventHTML page to render/fill the event box content to the DOM
const render = (eventArray) => {
    eventContainer.innerHTML = eventBoxHTML(eventArray)
}

