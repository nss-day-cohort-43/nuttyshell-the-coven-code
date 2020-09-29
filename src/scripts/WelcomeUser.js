// Authored by Terra Roush

const eventHub = document.querySelector(".container")
const welcomeTarget = document.querySelector(".dash--header")

export const WelcomeUser = (userId) => {
    if (userId) {
        // go to sessionStorage and get the key value pair defined as username and assign it this variable
        const activeUsername = sessionStorage.getItem("username")
        // if this exists, put this message in the dom target
        if (activeUsername) {
            welcomeTarget.innerHTML = `<div><h3>Witchy Salutations, ${activeUsername}!</h3></div>`;
        // otherwise put this in the dom
        } else {
            welcomeTarget.innerHTML = `<div><h3>Welcome to Nutshell! May all your spells cast the first time!</h3></div>`
        }
    }
    
}

export const WelcomeActiveUser = (userId) => {
    if (userId) {
        // this event listens for a login button click. when clicked, take the value of the username entered and add it to the message meant for the dom target
        eventHub.addEventListener("click", e => {
            if (e.target.id === "login__button") {
                const username = document.querySelector("#login__username").value;
                welcomeTarget.innerHTML = `<div><h3>Witchy Salutations, ${username}!</h3></div>`;
            }
        })
    }
}
