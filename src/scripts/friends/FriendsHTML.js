// Authored by Tristan Wyatt & Sam Edwards

export const friendsHtmlFormat = (friendsArray) => {
    debugger
    return `
    <h2 class="friendsHeader">Friends</h2></section>
        <div id="addFriend" title="Add Friend">+</div>
        ${friendsArray.map(friend => {
         return `
           <div id="friend--${friend.id}" class="friendContainer"> 
            <p class="friendName">${friend.user.username}</p>
            <button id="FriendDelete--${friend.id}" class="FriendDelete" title="FriendDelete">✘</button>
           </div> 
            `
        }).join("")
    }
    `
}