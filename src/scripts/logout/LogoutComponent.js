// Authored by Terra Roush

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", e => {
    if (e.target.id === ("logoutBtn")) {
        sessionStorage.clear()
        
    }
})

// defines a variable to target the header of dashboard
const logoutTarget = document.querySelector(".dash--header");

// function that creates logout button on dashboard
export const LogoutBtn = () => {
    logoutTarget.innerHTML += 
      `<button id="logoutBtn">Logout</button>`
}