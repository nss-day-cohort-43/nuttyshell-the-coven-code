// Authored by Hanako Hashiguchi

const eventHub = document.querySelector(".container")

let tasks = []

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("taskStateChange"))
}

export const useTaskEntries = () => {
    //This sorts the tasks by due date
    const sortedByDate = tasks.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getTaskEntries = () => {
    return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
        })
}

export const saveTaskEntry = (newTaskEntry) => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskEntry)
    }) 
        .then(dispatchStateChangeEvent)
}

export const completeTaskEntry = (entryId, completeTrueFalse) => {
    return fetch(`http://localhost:8088/tasks/${entryId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({complete: completeTrueFalse})
    })
    .then(dispatchStateChangeEvent)
}

export const deleteTaskEntry = (deletedTaskEntry) => {
    return fetch(`http://localhost:8088/tasks/${deletedTaskEntry}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(dispatchStateChangeEvent) 
}
