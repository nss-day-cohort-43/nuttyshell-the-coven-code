// Authored by Terra Roush

import { verifyActiveUser } from "../main.js"

// this is where the HTML form will populate
const contentTarget = document.querySelector(".auth--login")
const eventHub = document.querySelector(".container")

// when a click is registered on the login button...
eventHub.addEventListener("click", e => {
    if (e.target.id === "login__button") {
        // store value of the user input in username field to a likely named variable
        const username = document.querySelector("#login__username").value

        // return that user found by username
        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(response => response.json())
            .then(users => {
                // an array returns. if there is something in it, take the first index(0) and store the following key/value data in session storage
                if (users.length > 0) {
                    const user = users[0]
                    sessionStorage.setItem("activeUser", user.id)
                    sessionStorage.setItem("username", user.username)
                    sessionStorage.setItem("zipcode", user.zipcode)
                    // tell the app that the user has been made legit
                    eventHub.dispatchEvent(new CustomEvent("userAuthenticated"))
                    // Once user logs in, this renders Nutshell with current activeUser's information 
                    const activeUser = sessionStorage.getItem("activeUser", user.id)
                    verifyActiveUser(activeUser);

                // if not a legit user, rerender a blank form and alert user to register
                } else {
                   LoginForm();
                    window.alert("Not a legit user. Register first!  😭")
                }
            })
    }
})

// function that contains login form HTML
const render = () => {
    contentTarget.innerHTML = `
        <section class="login">
            <input id="login__username" type="text" placeholder="Username">
            <button id="login__button">Log In</button>
        </section>
    `
}

// this function tells the app to render the login form
export const LoginForm = () => {
    render()
}
