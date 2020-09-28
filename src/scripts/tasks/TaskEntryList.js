// Authored by Hanako Hashiguchi
import { getTaskEntries, useTaskEntries } from "./TaskDataProvider.js"
import { taskEntry } from "./TaskEntry.js"

const eventHub = document.querySelector(".container")

let taskArray = []

export const taskEntryList = () => {
    getTaskEntries()
        .then(() => {
            taskArray = useTaskEntries();
            addTasksToDOM(taskArray)
        })
}

const addTasksToDOM = arrayOfTasks => {
    const domElement = document.querySelector(".tasks")
    let HTMLArray = arrayOfTasks.map(task => taskEntry(task))

    domElement.innerHTML = `
    <ul class="tasks">
        ${HTMLArray.join("")}
    </ul>
    `
}

eventHub.addEventListener("taskStateChange", () => {
    getTaskEntries()
        .then(() => {
            addTasksToDOM(useTaskEntries());
        })
})