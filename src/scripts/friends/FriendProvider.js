// Authored by Tristan Wyatt & Sam Edwards & Terra Roush

import { listFriends } from "./FriendList.js"

const eventHub = document.querySelector(".container")

let friends = []

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
    fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendObj)
    })
}

export const getUser = username => {
    return fetch (`http://localhost:8088/users/?username=${username}`)
    .then(response => response.json())
    .then(parsedUsers => {
        let users = parsedUsers
        return users
    })
}