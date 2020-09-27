// By Audrey Thomasson
// This is the module for the list of all the events for a 
// user and eventually their friends

import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js";
import { eventForm } from "./EventForm.js";
import { singleEventHTML } from "./EventHTML.js";

// DOM reference to the event container
const eventContainer = document.querySelector(".events") 


// Listens for a click on the + sign and dispatches the notice so the form
// can be rendered so an event can be added
eventContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEvent") {
        eventForm()
    }
    //     const wantToAddEvent = new CustomEvent("wantToAddEvent")
    // }
    // eventContainer.dispatchEvent(wantToAddEvent)
})

// Listens for a click on the delete button & calls deleteEvent to remove from database
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



// listens for either a saveEvent or deleteEvent and then re-renders the 
// updated list of events
eventContainer.addEventListener('entryStateChanged', event => {
    const userId = sessionStorage.getItem("id") 
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

        // `<h2 class="eventHeader">Events</h2>
    // <div id="addEvent">+</div>`

}