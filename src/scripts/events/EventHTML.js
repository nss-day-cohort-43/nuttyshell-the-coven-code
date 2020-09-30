// Authored by Audrey Thomasson

// HTML for event box with add event, delete, edit and weather buttons
export const eventBoxHTML = (eventArray) => {
    return `
        <h2 class="eventHeader">Events</h2>
        <div id="addEvent">+</div>
        ${
            eventArray.map(event => {
                return `
                <div id="entry--${event.id}" class="singleEvent">
                <div>Event: ${event.name}</div>
                <div>Date: ${event.date}, ${event.time}</div>
                <div>Location: ${event.locationName}</div>
                <button class="delete" type="button" id="deleteEvent" value="${event.id}">✘</button>
                </div>
                `
            }).join("")
        }
    `
}

// For version2: add button to html above
/* <button type="button" class="edit" id="editEvent" value="${event.id}">✎</button> */
 // <button type="button" id=weather" value="${event.zip}--${event.date}">Weather</button>
