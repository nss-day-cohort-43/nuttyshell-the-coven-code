// Authored by Tristan Wyatt & Sam Edwards & Terra Roush

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