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

export const saveTaskEntry = newTaskEntry => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskEntry)
    }) 
        .then(dispatchStateChangeEvent)
}

export const deleteTaskEntry = deletedTaskEntry => {
    return fetch(`http://localhost:8088/entries/${deletedTaskEntry.id}`, {
        method: "DELETE"
    })
        .then(dispatchStateChangeEvent) 
}
