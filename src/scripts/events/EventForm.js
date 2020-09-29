// Authored by Audrey Thomasson
// HTML for the form to enter events and call the saveEvent function
// from EventDataProvider

import {saveEvent} from './EventDataProvider.js'

const eventContainer = document.querySelector(".events")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventContainer.dispatchEvent(entryStateChangedEvent)
}


// listens for notice that someone clicked on the + to add event
// calls the eventForm below
eventContainer.addEventListener('wantToAddEvent', event => {  
    eventForm()
})

// code below listens for new event entry then tells saveEvent 
// to go save the new event to the database
eventContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        const name = document.querySelector('#name')
        const date = document.querySelector('#date')
        const time = document.querySelector('#time')
        const location = document.querySelector('#location')
        const zipcode = document.querySelector('#zipcode')
        const userId = sessionStorage.getItem("activeUser")

        const newEvent = {
            name: name.value,
            date: date.value,
            time: time.value,
            locationName: location.value,
            zipcode: zipcode.value,
            userId: parseInt(userId)
        }
        
        saveEvent(newEvent)
    }
    if (clickEvent.target.id === "cancelEvent") {
        dispatchStateChangeEvent()
    }
})


export const eventForm = () => {
    return  eventContainer.innerHTML =     
    `<div id="cancelEvent">X</div>
    <form action="">
            <fieldset>
                <label for="event">Name of Event:</label>
                <input type="text" id="name" name="name">
            </fieldset>
            <fieldset>
                <label for="eventDate">Date of event:</label>
                <input type="date" name="date" id="date">
            </fieldset>
            <fieldset>
                <label for="eventTime">Time:</label>
                <input type="time" name="time" id="time">
            </fieldset>
            <fieldset>
                <label for="location">Name of Location:</label>
                <input type="text" id="location" name="location">
            </fieldset>
            <fieldset>
                <label for="zipcode">Location Zip Code:</label>
                <input type="text" id="zipcode" name="zipcode">
            </fieldset>  
            </form>        
            <button type="button" id="saveEvent">Save</button>
        `
    
}