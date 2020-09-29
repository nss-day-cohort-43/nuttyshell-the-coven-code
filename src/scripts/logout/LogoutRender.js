// Authored by Terra Roush

// defines a variable to target the header of dashboard
const logoutTarget = document.querySelector(".logoutBtn");

// function that creates logout button on dashboard
export const RenderLogout = () => {
    logoutTarget.innerHTML = 
      `<div><button id="logoutBtn">Logout</button></div>`
}