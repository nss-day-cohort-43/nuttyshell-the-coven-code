// Authored by Tristan Wyatt & Sam Edwards & Terra Roush

const eventHub = document.querySelector(".container")

let friends = []

const dispatchFriendStateChangeEvent = () => {
    const friendChangedEvent = new CustomEvent("friendStateChanged");
    // Store our friends in a detail to be used later
    eventHub.dispatchEvent(friendChangedEvent);
}

export const useFriends = () => [...friends]

export const getFriends = activeUser => {
    const convertedActiveUser = parseInt(activeUser)
    return fetch (`http://localhost:8088/friends/?myUserId=${convertedActiveUser}&_expand=user`)
    .then(response => response.json())
    .then(parsedFriends => {
        friends = parsedFriends
    })
}

export const saveNewFriend = (friendObj) => {
    const activeUser = (parseInt(sessionStorage.getItem("activeUser")))
    fetch("http://localhost:8088/friends/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendObj)
    })
    .then(getFriends(activeUser))
    .then(dispatchFriendStateChangeEvent)
}

export const getUser = username => {
    return fetch (`http://localhost:8088/users/?username=${username}`)
    .then(response => response.json())
    .then(parsedUsers => {
        let users = parsedUsers
        return users
    })
}

export const deleteFriend = (friendsId) => {
    fetch(`http://localhost:8088/friends/${friendsId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(dispatchFriendStateChangeEvent)
}

let users;

export const useUsers = () => {
    return users.slice()
}

export const getUsers = () => {
    return fetch (`http://localhost:8088/users/`)
    .then(response => response.json())
    .then(parsedUsers => {
        users = parsedUsers
    })
}
