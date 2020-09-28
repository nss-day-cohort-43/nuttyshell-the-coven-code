// Authored by Audrey Thomasson

import { EventList } from "./events/EventList.js"


export const Nutshell = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    const zipcode = sessionStorage.getItem("zipcode")
    // Render all your UI components here
    EventList(activeUser);
}