// Authored by Terra Roush

import { LoginForm } from "../../auth/LoginForm.js";
import { RegisterForm } from "../../auth/RegisterForm.js";

const eventHub = document.querySelector(".container");
const dashContainer = document.getElementById("dashContainer");
const authContainer = document.getElementById("authContainer");

// listen for a click on the logout button. when clicked clear sessionStorage and reload page with appropriate visabilities
eventHub.addEventListener("click", e => {
    if (e.target.id === ("logoutBtn")) {
        sessionStorage.clear()
        LoginForm();
        RegisterForm();
        dashContainer.classList.add("hideDashboard");
        authContainer.classList.remove("hideAuth");
    }
})

// defines a variable to target the header of dashboard
const logoutTarget = document.querySelector(".dash--header");

// connects logout to Nutshell
export const RenderLogout = (userId) => {}