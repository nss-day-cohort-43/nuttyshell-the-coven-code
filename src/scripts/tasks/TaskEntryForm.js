import { saveTaskEntry } from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")
const tasksContainer = document.querySelector(".tasks")

tasksContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {
        const taskInput = document.querySelector("#taskName")
        const dueDateInput = document.querySelector("#dueDate")
        const userId = sessionStorage.getItem("activeUser")
        if (taskInput.value !== "" && dueDateInput.value !== "") {
            const newTask = {
                "name": taskInput.value,
                "complete": false,
                "dueDate": dueDateInput.value,
                "userId": parseInt(userId)
            }
            saveTaskEntry(newTask)
        }
    }
})


export const renderTaskForm = () => {
    return `
        <div id="closeAddTasks">X</div>
        <form id="newTaskForm">
            <fieldset class="newTaskField">
                <label for="taskName">Task</label> 
                <input type="text" name="taskName" id="taskName">
            </fieldset>
            <fieldset class="newTaskField">
                <label for="dueDate">Due Date</label> 
                <input type="date" name="dueDate" id="dueDate">
            </fieldset>
            <button type="button" id="saveTask">Save Task</button>
        </form>
        `
}