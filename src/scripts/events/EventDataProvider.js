


let events = []


export const getEvents = () => {
    return fetch("http://localhost:8088/events?userId=1") // Fetch from the API
    .then(response => response.json())
    .then(
        parsedEvents => {
        events = parsedEvents
        })
}


export const useEvents = () => {
    const sortedByDate = events.sort(
        (currentEvent, nextEvent) =>
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
        body: JSON.stringify(tacoEntryObj)
    })
    .then(dispatchStateChangeEvent)
}

export const deleteEvent = tacoEntryObj => {
    return fetch(`http://localhost:8088/entries/${tacoEntryObj}`, {
        method: "DELETE",
    })
    .then(dispatchStateChangeEvent)
}