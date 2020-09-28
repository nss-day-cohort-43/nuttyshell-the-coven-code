const logoutTarget = document.querySelector(".dash--header");

export const LogoutBtn = () => {
    logoutTarget.innerHTML += 
      `<button id="logoutBtn">Logout</button>`
}