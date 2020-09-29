// Authored by Tristan Wyatt & Sam Edwards

import { getFriends, useFriends } from "./FriendProvider.js"
import { friendsHtmlFormat } from "./FriendsHTML.js"

const eventHub = document.querySelector(".container")
const friendsContainer = document.querySelector(".friends")

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

// Event listener that listens for friendStateChanged and re renders our friend list
eventHub.addEventListener("friendStateChanged", () => {
    const activeUser = (parseInt(sessionStorage.getItem("activeUser")))
    listFriends(activeUser)
})

// Event Listener that closes the Add Friend section upon clicking the X
friendsContainer.addEventListener("click", e => {
    if(e.target.id === "closeAddFriend"){
        const activeUser = (parseInt(sessionStorage.getItem("activeUser")))
        listFriends(activeUser)
    }
})

