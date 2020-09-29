import { listFriends } from "./FriendList.js"
import { getUser, saveNewFriend } from "./FriendProvider.js"

 const addFriend = () => {
    return ` <label for="newFriend">Add Friend</label>
             <input type="text" name="newFriend" id="friendInput">
             <button type="button" id="addNewFriend">ADD</button>
    
    `
}

// const addFriend = document.querySelector("#addFriend");
const friendsContainer = document.querySelector(".friends")

export const friend = () => {
friendsContainer.addEventListener("click", e => {
    if(e.target.id === "addFriend") {
        friendsContainer.innerHTML = addFriend()
    }
})
}
 

let userId = (parseInt(sessionStorage.getItem("activeUser")))

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
    .then(listFriends(userId))
    }
    
})