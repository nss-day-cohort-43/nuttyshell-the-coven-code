// Authored by Tristan Wyatt & Sam Edwards

import { getFriends, useFriends } from "./FriendProvider.js"
import { friendsHtmlFormat } from "./FriendsHTML.js"

const eventHub = document.querySelector(".container")
const friendsContainer = document.querySelector(".friends")
let userId = (parseInt(sessionStorage.getItem("activeUser")))

// Event listener for when friends are added/removed, re-render

// Eventhub listeners for add friend button click, delete button click

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

eventHub.addEventListener("friendStateChanged", () => {
    listFriends(userId)
})