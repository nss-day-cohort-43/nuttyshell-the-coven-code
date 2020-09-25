// By Audrey Thomasson
// This is the module for the list of all the events for a 
// user and eventually their friends

import { getEvents, useEvents } from "./EventDataProvider.js";
import { singleEventHTML } from "./EventHTML.js";

// DOM reference to the event container
const eventContainer = document.querySelector(".events")
const userId = sessionStorage.getItem("id") 


// listens for either a saveEvent or deleteEvent and then re-renders the 
// updated list of events
eventContainer.addEventListener('entryStateChanged', event => {  
    EventList(userId)
})

// this EventList is called by the main.js to render the initial
// list of entries of the active user
export const EventList = (userId) => {
    getEvents(userId)
    .then(useEvents)
    .then(render)
}

const render = (eventArray) => {
       let HTMLArray = eventArray.map(singleEvent => {
           return singleEventHTML(singleEvent);
       })
        eventContainer.innerHTML = HTMLArray.join("");
}