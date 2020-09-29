// Authored by Audrey Thomasson

// HTML for event box with add event, delete, edit and weather buttons
export const eventBoxHTML = (eventArray) => {
    return `
        <h2 class="eventHeader">Events</h2>
        <div id="addEvent">+</div>
        <br>
        ${
            eventArray.map(event => {
                return `
                <div id="entry--${event.id}" class="singleEvent">
                <div>Event: ${event.name}</div>
                <div>Date: ${event.date}, ${event.time}</div>
                <div>Location: ${event.locationName}</div>
                <button type="button" id=weather" value="${event.zip}--${event.date}">Weather</button>
                <button type="button" id="deleteEvent" value="${event.id}">X</button>
                <button type="button" id="editEvent" value="${event.id}">edit</button>
                `
            }).join("")
        }
    `
}