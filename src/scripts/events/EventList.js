// Authored by Audrey Thomasson
// This is the module for the list of all the events for a 
// user and eventually their friends
// Listens for clicks on the addEvent, deleteEvent, weather buttons

import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js";
import { eventForm } from "./EventForm.js";
import { eventBoxHTML } from "./EventHTML.js";


// DOM reference to the event container
const eventContainer = document.querySelector(".events") 

// listens for either a saveEvent, deleteEvent, or cancel form and then re-renders the 
// updated list of events
eventContainer.addEventListener('entryStateChanged', event => {
    const userId = sessionStorage.getItem("activeUser") 
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
})





// this EventList is called by the nutshell.js to render the initial
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

