export const taskEntry = task => {
    return `
        <li id="task--${task.id}" class="taskEntry">
            ${task.name} Due Date: ${task.dueDate} 
            <button class="delete">Delete Task</button>
        </li>
    `
}