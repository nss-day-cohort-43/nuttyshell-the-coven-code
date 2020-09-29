export const taskEntry = task => {
    return `
        <li id="task--${task.id}" class="taskEntry">
            <input class="completed" title="Completed Task" id="complete--${task.id}" type="checkbox"/>
            ${task.name} Due Date: ${task.dueDate} 
            <button class="delete" title="Delete" id="delete--${task.id}">✘</button>
        </li>
    `
}
