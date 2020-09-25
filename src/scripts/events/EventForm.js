// By Audrey Thomasson
// HTML for the form to enter events and call the saveEvent function
// from EventDataProvider

import {saveEvent} from './EventDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".events")

// code below listens for new event enry then tells saveEvent 
// to go save the new event to the database
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        const name = document.querySelector('#name')
        const date = document.querySelector('#date')
        const time = document.querySelector('#time')
        const entryContent = document.querySelector("#entry")

        const newEvent = {
            name: name.value,
            date: date.value,
            time: time.value,
            locationName: location.value,
            zipcode: zipcode.value,
            userId: id
        }
        
        saveEvent(newEvent)
 
    }
})



export const eventForm = () => {
    return  contentTarget.innerHTML =     
    `<form action="">
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
            <label for="zipcode">Location Zipcode:</label>
            <input type="text" id="zipcode" name="zipcode">
            </fieldset>
            <br>   
            </form>        
            <button type="button" id="saveEvent">Save</button>
        `
    
}