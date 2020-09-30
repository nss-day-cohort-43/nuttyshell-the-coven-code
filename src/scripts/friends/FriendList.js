// Authored by Tristan Wyatt & Sam Edwards

import { getFriends, saveNewFriend, useFriends } from "./FriendProvider.js"
import { friendsHtmlFormat } from "./FriendsHTML.js"
import { allTheNews } from "../News/News.js"

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
            // Check to ensure you're not clicking on the activeUser
            if (activeUser !== parsedId) {
                // If there are no friends in your friends list, add friend
                if (currentFriends.length === 0) {
                    addFriendToList(activeUser, parsedId)
                } else {
                    // If there are friends in your friends list.
                    // Check to ensure the clicked user is not already added.
                    const friendOnList = currentFriends.find(friend => friend.user.id === parsedId)
                    if (friendOnList === undefined) {
                        addFriendToList(activeUser, parsedId)
                    }
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

const addFriendToList = (activeUser, friendUserId) => {
    const newFriend = {
        myUserId: activeUser,
        userId: friendUserId
    }
    saveNewFriend(newFriend);
}