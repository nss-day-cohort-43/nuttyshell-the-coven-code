const eventHub = document.querySelector(".container")

let tasks = []

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("taskStateChange"))
}

export const getTaskEntries = () => {
    return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
        })
}

export const saveJournalEntry = newJournalEntry => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskEntry)
    }) 
        .then(dispatchStateChangeEvent)
}

export const deleteJournalEntry = deletedJournalEntry => {
    return fetch(`http://localhost:8088/entries/${deletedJournalEntry.id}`, {
        method: "DELETE"
    })
        .then(dispatchStateChangeEvent) 
}
