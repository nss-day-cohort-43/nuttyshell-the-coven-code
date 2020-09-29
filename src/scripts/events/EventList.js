// Authored by Audrey Thomasson
// This is the module for the list of all the events for a 
// user and eventually their friends
// Listens for clicks on the addEvent, deleteEvent, weather buttons

import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js";
import { eventForm } from "./EventForm.js";
import { eventBoxHTML } from "./EventHTML.js";
import { weatherDetail } from "./EventWeather.js"


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

     
    
    
     
    
    
    
    // Listens for a click on the weather button, checks if the event 
    // is within 5 days of todays date
    if (clickEvent.target.id === "weather") {
        // *******CHECK IN HERE IF THE DATE OF THE EVENT IS CLOSE ENOUGH******
        // I made this part up. I don't know if I can split a value on the --
         const [zip, eventDate] = clickEvent.target.value.split("--")
         const today = new Date();

        //  if (eventDate - today <= 5) {
        //      CALL weatherDetail from EventWeather.js an pass in eventDate & zip
        //  } else {
        //      alert window "date is too far away, etc"
        //  }
         
 
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

