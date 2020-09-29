// Authored by Audrey Thomasson

const eventContainer = document.querySelector(".events")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventContainer.dispatchEvent(entryStateChangedEvent)
}

let events = []

// fetches all events stored for a user in the api
export const getEvents = (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}`)
    .then(response => response.json())
    .then(
        parsedEvents => {
        events = parsedEvents
        })
}

// returns copy of array of Events sorted by date
export const useEvents = () => {
    const sortedByDate = events.sort(
        (nextEvent, currentEvent) =>
            Date.parse(nextEvent.date) - Date.parse(currentEvent.date)
    )
    return sortedByDate
}

export const saveEvent = tacoEventObj => {
    return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tacoEventObj)
    })
    .then(dispatchStateChangeEvent)
}

export const deleteEvent = eventIdNum => {
    return fetch(`http://localhost:8088/events/${eventIdNum}`, {
        method: "DELETE",
    })
    .then(dispatchStateChangeEvent)
}