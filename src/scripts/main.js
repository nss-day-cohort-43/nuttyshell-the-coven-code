// Authored by Terra Roush

import { LoginForm } from "./auth/LoginForm.js";
import { RegisterForm } from "./auth/RegisterForm.js";
import { Nutshell } from "./Nutshell.js";
import { WelcomeUser } from "./authHeader/WelcomeUser.js";
import { authHeaderRender } from "./authHeader/authHeader.js";
import { saveEvent } from "./events/EventDataProvider.js"




/*
1. Check if the user is authenticated by looking in session storage for `activeUser`
2. If so, render the Nutshell component
3. If not, render the login and registration forms
4. Also, if the user authenticates, and the login form is initially shown
ensure that the Nutshell component gets rendered
*/
const authContainer = document.getElementById("authContainer");
const dashContainer = document.getElementById("dashContainer");

// on page load, go to session storage and see if there is a key defined as activeUser, store that in a variable
const activeUser = sessionStorage.getItem("activeUser")

// Once user logs in, this renders Nutshell with current activeUser's information
export const verifyActiveUser = activeUser => {
  Nutshell(activeUser)
}

// This script only runs once, on initial page load.
// if there is an activeUser, that means they've been here before so load the dashboard components(also reveal dashboard and hide login/reg)
if (activeUser) {
  Nutshell(activeUser)
  WelcomeUser()
  dashContainer.classList.remove("hideDashboard");
  authContainer.classList.add("hideAuth");
  authHeaderRender()
  // otherwise display login/register
} else {
  authHeaderRender()
  LoginForm();
  RegisterForm();
  dashContainer.classList.add("hideDashboard");
}
