import { allTheNews } from "./News/News.js"
import { listPosts } from "./posts/PostList.js"
import { Tasks } from "./tasks/Tasks.js"

export const Nutshell = () => {
    // Render all your UI components here
    Tasks()
    allTheNews()
    listPosts();
}