import { RenderLogout } from "./authHeader/logout/LogoutComponent.js";
import { allTheNews } from "./News/News.js"
import { EventList } from "./events/EventList.js"
import { listPosts } from "./posts/PostList.js"
import { Tasks } from "./tasks/Tasks.js"
import { listFriends } from "./friends/FriendList.js"
import {  WelcomeUser, WelcomeActiveUser } from "./authHeader/WelcomeUser.js"
import { friend } from "./friends/FriendInput.js";



export const Nutshell = (activeUser) => {
    // Render all your UI components here
    // Must convert activeUser from string to integer
    const parsedActiveUser = parseInt(activeUser)
    WelcomeUser(parsedActiveUser);
    WelcomeActiveUser(parsedActiveUser);
    RenderLogout(parsedActiveUser);
    allTheNews()
    EventList(parsedActiveUser);
    listPosts(parsedActiveUser);
    listFriends(parsedActiveUser);
    Tasks();
    friend();
}
