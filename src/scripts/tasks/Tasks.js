// Authored by Hanako Hashiguchi

import { getTaskEntries, useTaskEntries, deleteTaskEntry } from "./TaskDataProvider.js";
import { renderTaskForm } from "./TaskEntryForm.js";
import { addTasksToDOM } from "./TaskEntryList.js";

const tasksContainer = document.querySelector(".tasks")

export const Tasks = () => {
    getTaskEntries()
        .then(() => {
        const tasksArray = useTaskEntries()
        let userTasks = tasksArray.filter(tasks => tasks.userId === parseInt(sessionStorage.getItem("activeUser")))
        addTasksToDOM(userTasks)
    })
}

tasksContainer.addEventListener("click", e => {
    if(e.target.id === "addTasks"){
    tasksContainer.innerHTML = renderTaskForm()
    } else if(e.target.id === "closeAddTasks"){
        Tasks()
    }
})

tasksContainer.addEventListener("click", e => {
    if(e.target.id.startsWith("delete--")){
        const [prefix, id] = e.target.id.split("--")
        const taskToBeDeleted = parseInt(id)
        deleteTaskEntry(taskToBeDeleted)
    }
});