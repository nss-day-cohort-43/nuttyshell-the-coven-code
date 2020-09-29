// Authored by Hanako Hashiguchi

import { taskEntry } from "./TaskEntry.js"
import { Tasks } from "./Tasks.js"

const eventHub = document.querySelector(".container")

export const addTasksToDOM = arrayOfTasks => {
    const domElement = document.querySelector(".tasks")
    let HTMLArray = arrayOfTasks.map(task => taskEntry(task))

    domElement.innerHTML = `
        <h2 class="tasksHeader">Tasks</h2>
        <div id="addTasks" title="Add New">+</div>
        <ul class="tasks">
            ${HTMLArray.join("")}
        </ul>
    `
}

eventHub.addEventListener("taskStateChange", () => {
    Tasks()
})