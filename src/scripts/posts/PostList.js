// Module goals:
    // import all needed scripts for the posts section
    // render all elements
    // handle  eventHub clicks

// Requirements:
    // create posts
    // Posts must be prepended with user's name (and a timestamp)
    // sort posts so the most recent is at bottom
    // Delete posts

import { getPosts, usePosts } from "./PostProvider.js"
import { PostDashboardHTML } from "./PostDashboardHTML.js"

export const listPosts = () => {
    getPosts()
    .then(() => {
        const posts = usePosts()
        const sortedPosts = sortPosts(posts)
        renderPostDashboard(sortedPosts);
    })
}

// Render entire post section
    // Takes a posts array of all current posts
    // and displays all those posts
const renderPostDashboard = (sortedPostArray) => {
    const targetElement = document.querySelector(".posts")
    targetElement.innerHTML = PostDashboardHTML(sortedPostArray);
}

// Sort posts for most recent at bottom
const sortPosts = (postArray) => {
    return postArray.sort((post1, post2) => post1.currentTimeStamp - post2.currentTimeStamp)
}