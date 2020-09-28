import { allTheNews } from "./News/News.js"
import { listPosts } from "./posts/PostList.js"
import { listFriends } from "./friends/FriendList.js"

export const Nutshell = (activeUser) => {
    // Render all your UI components here
    allTheNews()
    listPosts();
    listFriends(activeUser);
}