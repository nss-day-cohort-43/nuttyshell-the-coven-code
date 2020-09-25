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

export const listPosts = () => {
    getPosts()
    .then(() => {
        const posts = usePosts()
        console.log(posts)
    })
}

// Render entire post section
    // Takes a posts array of all current posts
    // and displays all those posts
const renderPostDashboard = (postsArray) => {

}