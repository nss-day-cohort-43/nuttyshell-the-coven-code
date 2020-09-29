import { completeTaskEntry } from "./TaskDataProvider.js"

const tasksContainer = document.querySelector(".tasks")

tasksContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("complete--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        const numId = parseInt(id)
        const taskInput = document.querySelector(`#taskName--${numId}`)
        const dueDateInput = document.querySelector(`#dueDate--${numId}`)
        const userId = sessionStorage.getItem("activeUser")
        debugger;
            const newTask = {
                name: taskInput.value,
                complete: true,
                dueDate: dueDateInput.value,
                userId: parseInt(userId)
            }
            completeTaskEntry(numId, newTask)
    }
})

export const taskEntry = task => {
    return `
        <li id="task--${task.id}" class="taskEntry">
            <input class="completed" title="Completed Task" id="complete--${task.id}" type="checkbox"/>
            <div id="taskName--${task.id}" value="${task.name}">${task.name}</div>
            <div id="dueDate--${task.id}" value="${task.dueDate}">Due Date: ${task.dueDate}</div> 
            <button class="delete" title="Delete" id="delete--${task.id}">✘</button>
        </li>
    `
}


