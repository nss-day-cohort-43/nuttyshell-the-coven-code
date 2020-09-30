// Author Tristan Wyatt
import { eventBoxHTML } from "../events/EventHTML.js"
import { getFriends, useFriends } from "./FriendProvider.js";

const activeUser = parseInt(sessionStorage.getItem("activeUser"));
const eventContainer = document.querySelector(".events") 

getFriends()
export const allEvents = () => {
    getFriendsEvent()
    .then(() => {
        let friends = useFriends()
        let events = useFriendsEvents()

        let userEvents = events.filter(event => {
            return event.userId === activeUser || friends.filter(friend => friend.userId )
        })
        render(userEvents)
    })

}

const render = (eventArray) => {
    eventContainer.innerHTML = eventBoxHTML(eventArray)
}

let events
const getFriendsEvent = () => {
    return fetch(`http://localhost:8088/events/`)
    .then(response => response.json())
    .then(
        parsedEvents => {
        events = parsedEvents
        })
}

const useFriendsEvents = () => {
    events = events.sort(
        (nextEvent, currentEvent) =>
            Date.parse(nextEvent.date) - Date.parse(currentEvent.date)
    )
    return events
}