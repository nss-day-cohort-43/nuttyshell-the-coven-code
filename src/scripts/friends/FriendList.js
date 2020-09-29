// Authored by Tristan Wyatt & Sam Edwards

import { getFriends, useFriends } from "./FriendProvider.js"
import { friendsHtmlFormat } from "./FriendsHTML.js"

const eventHub = document.querySelector(".container")
const friendsContainer = document.querySelector(".friends")

// eventHub listener to re-render when friends change
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

// eventHub listeners for add friend button click, delete button click
    eventHub.addEventListener("click", e => {
        if (e.target.id.startsWith("single__username--")) {
            const [prefix, id] = e.target.id.split("--")
            const parsedId = parseInt(id)
            const activeUser = (parseInt(sessionStorage.getItem("activeUser")))
            const currentFriends = useFriends()
            debugger
            if (activeUser !== parsedId) {
                if (currentFriends !== null) {
                    currentFriends.map(friend => {
                        if (friend.user.id !== parsedId) {
                            return console.log("NOT ON FRIENDS LIST")
                        }
                    })
                }
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