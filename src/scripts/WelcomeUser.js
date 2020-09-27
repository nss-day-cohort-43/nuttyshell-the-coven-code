const eventHub = document.querySelector(".container")
const welcomeTarget = document.querySelector(".dash--header")

const activeUsername = sessionStorage.getItem("activeUser")

if (activeUsername) {
    welcomeTarget.innerHTML = `<h3>Witchy Salutations, ${activeUsername}!</h3>`;
} else {
    welcomeTarget.innerHTML = `<h3>Welcome to Nutshell! May all your spells cast the first time!</h3>`
}

eventHub.addEventListener("click", e => {
    if (e.target.id === "register__button") {
        let username = document.querySelector("#register__username").value
    }
})
eventHub.addEventListener("click", e => {
    if (e.target.id === "login__button") {
        username = document.querySelector("#login__username").value
    }
})
