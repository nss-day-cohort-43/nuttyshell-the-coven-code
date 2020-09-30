// Authored by Tristan Wyatt
import { useFriends, getUser, saveNewFriend } from "./FriendProvider.js"
import { listFriends } from "./FriendList.js";

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
    const friendValue = document.querySelector("#friendInput")
 
    if(e.target.id === "addNewFriend"){
        const friends = useFriends()
        if(friendValue.value !== ""){
           
            const friendsList = friends.find(a => a.user.username === friendValue.value)
    
            if(friendsList === undefined){
                getUser(friendValue.value)
                .then(user => {
                const newFriend = {
                myUserId: parseInt(sessionStorage.getItem("activeUser")),
                userId: parseInt(user.map(user => user.id).join(""))
        }
        saveNewFriend(newFriend)
            }  

        )} else {
            listFriends(parseInt(sessionStorage.getItem("activeUser")))
        }
    }
}})

// const activeUser = (parseInt(sessionStorage.getItem("activeUser")))
// getFriends(activeUser)

