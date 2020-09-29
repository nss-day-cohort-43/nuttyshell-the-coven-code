// Authored by Terra Roush

const eventHub = document.querySelector(".container")
const welcomeTarget = document.querySelector(".dash--header")

// go to sessionStorage and get the key value pair defined as username and assign it this variable
const activeUsername = sessionStorage.getItem("username")
// if this exists, put this message in the dom target
if (activeUsername) {
    welcomeTarget.innerHTML = `<h2>Witchy Salutations, ${activeUsername}!</h2>`;
    // otherwise put this in the dom
} else {
    welcomeTarget.innerHTML = `<h2>Welcome to Nutshell! May all your spells cast the first time!</h2>`
}

// this event listens for a login button click. when clicked, take the value of the username entered and add it to the message meant for the dom target
eventHub.addEventListener("click", e => {
    if (e.target.id === "login__button") {
        const username = document.querySelector("#login__username").value;
        welcomeTarget.innerHTML = `<h2>Witchy Salutations, ${username}!</h2>`;
    }
})

// not sure if this is legit, but this connects this page's happenings to main.js
export const WelcomeUser = () => {}
