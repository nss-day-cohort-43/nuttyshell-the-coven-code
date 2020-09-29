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

// eventHub listeners for add friend button click, delete button click
    eventHub.addEventListener("click", e => {
        if (e.target.id.startsWith("single__username--")) {
            const [prefix, id] = e.target.id.split("--")
            const parsedId = parseInt(id)
            const activeUser = (parseInt(sessionStorage.getItem("activeUser")))
            const currentFriends = useFriends()
            if (activeUser !== parsedId) {
                currentFriends.map(friend => {
                    if (friend.user.id === parsedId) {
                        return  console.log("ON FRIENDS LIST")
                    } else {
                        return console.log("NOT ON FRIENDS LIST")
                    }
                })
 
                // OR we just use useFriends, which would mean a saveFriend event needs to getFriends

                // Check if you are or not on my friend's list.
                // Get all my friends, and check to see if the parsedId
                // shows up at all for my activeUser's friends
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