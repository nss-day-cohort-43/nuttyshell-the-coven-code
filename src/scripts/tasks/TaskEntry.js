// Authored by Hanako Hashiguchi and Sam Edwards

import { completeTaskEntry } from "./TaskDataProvider.js"

const tasksContainer = document.querySelector(".tasks")

tasksContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("complete--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        const numId = parseInt(id)
        if(clickEvent.target.checked === true){
            completeTaskEntry(numId, true)
        } else {
            completeTaskEntry(numId, false)
        }       
    }
})

const checkCheckBox = (task, completedBoolean) => {
    const notCompleted = `<input class="completed" title="Completed Task" id="complete--${task.id}" type="checkbox"/>`
    const completed = `<input checked class="completed" title="Completed Task" id="complete--${task.id}" type="checkbox"/>`

    return completedBoolean ? completed : notCompleted;
}

export const taskEntry = task => {
    return `
        <li id="task--${task.id}" class="taskEntry">
            ${checkCheckBox(task, task.complete)}
            <div id="taskName--${task.id}" value="${task.name}">${task.name}</div>
            <div id="dueDate--${task.id}" value="${task.dueDate}">Due Date: ${task.dueDate}</div> 
            <button class="delete" title="Delete" id="delete--${task.id}">✘</button>
        </li>
    `
}


