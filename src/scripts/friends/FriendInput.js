// Authored by Tristan Wyatt
import { getUser, saveNewFriend } from "./FriendProvider.js"

const friendsContainer = document.querySelector(".friends")

// Populates the friend container with an input field to add a new friend
 const addFriend = () => {
    return `<div id="closeAddFriend">X</div>
            <label for="newFriend">Add Friend</label>
             <input type="text" name="newFriend" id="friendInput">
             <button type="button" id="addNewFriend">ADD</button>
    
    `
}

// const addFriend = document.querySelector("#addFriend");
export const friend = () => {
friendsContainer.addEventListener("click", e => {
    if(e.target.id === "addFriend") {
        friendsContainer.innerHTML = addFriend()
    }
})
}
 

// Event listener for adding a new friend, when the user enters a username
// It will send that user to the database as a new friend relationship
// and re render the friends list
friendsContainer.addEventListener("click", e => {
    if(e.target.id === "addNewFriend"){
        const friendValue = document.querySelector("#friendInput")
        getUser(friendValue.value)
        .then(user => {
        const newFriend = {
            myUserId: parseInt(sessionStorage.getItem("activeUser")),
            userId: parseInt(user.map(user => user.id).join(""))
        }
        saveNewFriend(newFriend)
    })
}
})