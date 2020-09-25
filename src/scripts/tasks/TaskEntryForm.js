const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasks")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {
        const taskInput = document.querySelector("#taskName")
        const dueDateInput = document.querySelector("#dueDate")
        const userId = sessionStorage.getItem("id")
        if (taskInput.value !== "" && dueDateInput.value !== "") {
            const newTask = {
                "name": taskInput.value,
                "complete": false,
                "dueDate": dueDateInput.value,
                "userId": userId
            }
        }
    }
})


export const renderTaskForm = () => {
    const form = `
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