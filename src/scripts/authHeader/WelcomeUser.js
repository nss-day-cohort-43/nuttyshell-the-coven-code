// Authored by Terra Roush

const eventHub = document.querySelector(".container")
const welcomeTarget = document.querySelector(".dash--header")

export const WelcomeUser = (userId) => {
    if (userId) {
        // go to sessionStorage and get the key value pair defined as username and assign it this variable
        const activeUsername = sessionStorage.getItem("username")
        // if this exists, put this message in the dom target
        if (activeUsername) {
            welcomeTarget.innerHTML = `
            <div class="fullLogoContainer">
            <img class="fullLogo" src="./images/The_Coven_Code_Ball_200x200.png" alt="Black blended to Brown blended to blue crystal ball">
            
            </div>
                <h1>Witchy Salutations, ${activeUsername}!</h1>
                <button id="logoutBtn">Logout</button>
            `;
        // otherwise put this in the dom
        } else {
            welcomeTarget.innerHTML = `
            <div class="fullLogoContainer">
            <img class="fullLogo" src="./images/The_Coven_Code_Ball_200x200.png" alt="Black blended to Brown blended to blue crystal ball">
            </div>
                <h1>Welcome to Nutshell! May all your spells cast the first time!</h1>
                <button id="logoutBtn">Logout</button>
            `
        }
    }
    
}

export const WelcomeActiveUser = (userId) => {
    if (userId) {
        // this event listens for a login button click. when clicked, take the value of the username entered and add it to the message meant for the dom target
        eventHub.addEventListener("click", e => {
            if (e.target.id === "login__button") {
                const username = document.querySelector("#login__username").value;
                welcomeTarget.innerHTML = 
                    `   <div class="fullLogoContainer">
                            <img class="fullLogo" src="./images/The_Coven_Code_Ball_200x200.png" alt="Black blended to Brown blended to blue crystal ball">
                        </div>
                        <h1>Witchy Salutations, ${username}!</h1><button id="logoutBtn">Logout</button>`;
            }
        })
    }
}
