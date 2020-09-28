import { LogoutBtn } from "./logout/LogoutComponent.js";
import { allTheNews } from "./News/News.js"
import { listPosts } from "./posts/PostList.js"
    
export const Nutshell = () => {
    // Render all your UI components here
    LogoutBtn()
    allTheNews()
    listPosts();
}