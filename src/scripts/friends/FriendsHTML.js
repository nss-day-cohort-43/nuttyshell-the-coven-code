// Authored by Tristan Wyatt & Sam Edwards

import { deleteFriend } from "./FriendProvider.js";

const friendsContainer = document.querySelector(".friends")

export const friendsHtmlFormat = (friendsArray) => {
    return `
    <h2 class="friendsHeader">Friends</h2></section>
        <div id="addFriend" title="Add Friend">+</div>
        ${friendsArray.map(friend => {
         return `
           <div id="friend--${friend.id}" class="friendContainer"> 
            <span class="friendName">${friend.user.username}</span>
            <button id="FriendDelete--${friend.id}" class="FriendDelete" title="FriendDelete">    ✘</button>
           </div> 
            `
        }).join("")
    }
    `
}

friendsContainer.addEventListener("click", e => {
    if(e.target.id.startsWith("FriendDelete--")){
        const [prefix, id] = e.target.id.split("--")
        deleteFriend(parseInt(id))
    }
})
