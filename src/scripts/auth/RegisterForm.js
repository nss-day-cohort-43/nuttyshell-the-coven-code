// Authored by Terra Roush

import { emailIsValid } from "./validateEmail.js";
import { validateZipCode } from "./validateZipCode.js";
import { Nutshell } from "../Nutshell.js"

// this is where the HTML form will populate
const contentTarget = document.querySelector(".auth--register");
const eventHub = document.querySelector(".container");
const authContainer = document.getElementById("authContainer");
const dashContainer = document.getElementById("dashContainer");

//when a user is deemed legit, a classlist is added to the entire authorization container to make it disappear.
eventHub.addEventListener("userAuthenticated", (e) => {
  authContainer.classList.add("hideAuth");
  dashContainer.classList.remove("hideDashboard");
});

eventHub.addEventListener("click", (e) => {
  // when the click is on the register button...
  if (e.target.id === "register--button") {
    // store values of username,email and zipcode and assign them to variables
    const username = document.querySelector("#register--username").value;
    let email = document.querySelector("#register--email").value;
    const zipcode = document.querySelector("#register--zipcode").value;

    //if these fields are not empty
    if (username !== "" && email !== "" && zipcode !== "") {
      if (emailIsValid(email)) {
        if (validateZipCode(zipcode)) {
            //Is this username in our database of users?
        fetch(`http://localhost:8088/users?username=${username}`)
          .then((response) => response.json())
          .then((users) => {
            // if no users come back, then POST, or add that new user to our database
            if (users.length === 0) {
              fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                // make this data into json suitable strings
                body: JSON.stringify({
                  username: username,
                  email: email,
                  zipcode: parseInt(zipcode),
                }),
              })
                .then((response) => response.json())
                // then save these key/value pairs of data in session storage
                .then((newUser) => {
                  sessionStorage.setItem("activeUser", newUser.id);
                  sessionStorage.setItem("username", newUser.username);
                  sessionStorage.setItem("email", newUser.email);
                  sessionStorage.setItem("zipcode", newUser.zipcode);
                  // tell the app that the user has been made legit
                  eventHub.dispatchEvent(new CustomEvent("userAuthenticated"));
                  Nutshell(sessionStorage.getItem("activeUser"))
                });
            } else {
              window.alert("Username already exists!");
              render();
            }
          });
        } else {
            window.alert("Please enter a valid zip code");
        }
        
      } else {
        window.alert("Please enter a valid email address");
      }
    }
  }
});

// function that contains registration form HTML
const render = () => {
  contentTarget.innerHTML = `
        <section class="register">
            <input id="register--username" type="text" placeholder="Username">
            <input id="register--email" type="text" placeholder="Email">
            <input id="register--zipcode" type="text" maxlength="5" placeholder="Zipcode">

            <button id="register--button">Register</button>
        </section>
    `;
};

// this function tells the app to render the registration form
export const RegisterForm = () => {
  render();
};
