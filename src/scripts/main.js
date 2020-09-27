import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
const eventHub = document.querySelector('.container');
const authContainer = document.getElementById("authContainer");
const dashContainer = document.getElementById("dashContainer");

// on page load, go to session storage and see if there is a key defined as activeUser, store that in a variable
const activeUser = sessionStorage.getItem("activeUser")
// if there is an activeUser, that means they've been here before so load the dashboard components(also reveal dashboard and hide login/reg)
if (activeUser) {
    dashContainer.classList.remove("hideDashboard");
    authContainer.classList.add("hideAuth");
    Nutshell()
// otherwise display login/register
} else {
    LoginForm();
    RegisterForm();
}
