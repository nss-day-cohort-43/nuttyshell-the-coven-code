// Authored by Tristan Wyatt & Sam Edwards

import { getFriends, useFriends } from "./FriendProvider.js"
import { friendsHtmlFormat } from "./FriendsHTML.js"

const eventHub = document.querySelector(".container")
const friendsContainer = document.querySelector(".friends")

// Event listener for when friends are added/removed, re-render

// eventHub listeners for add friend button click, delete button click
    eventHub.addEventListener("click", e => {
        if (e.target.id.startsWith("single__username--")) {
            const [prefix, id] = e.target.id.split("--")
            const parsedId = parseInt(id)
            const activeUser = parseInt(sessionStorage.getItem("activeUser"))
            if (activeUser !== parsedId) {
                console.log("ADD ME TO YOUR FRIENDS LIST")
                // Also check if you are or not on my friend's list.
                // Needs a boolean check on the user id.
                // Friends list item needs to have isOnFriendsList or something
            }
        }
    })

export const listFriends = (activeUser) => {
    getFriends(activeUser)
    .then(() => {
        const friends = useFriends()
        renderFriends(friends)
    })
}

const renderFriends = (friendsArray) => {
    friendsContainer.innerHTML = friendsHtmlFormat(friendsArray)
}