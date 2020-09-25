// Module goals:
    // import all needed scripts for the posts section
    // render all elements
    // handle  eventHub clicks

// Requirements:
    // create posts
    // DONE -- Posts must be prepended with user's name (and a timestamp)
    // DONE -- sort posts so the most recent is at bottom
    // Delete posts

import { getPosts, usePosts } from "./PostProvider.js"
import { postBoxHTML } from "./PostBoxHTML.js"
import { newPostHTML } from "./PostNewHTML.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", e => {
    switch(e.target.id) {
        case "post__btnPost":
            console.log("CLICKED POST")
            break;
        case "post__btnEdit":
            console.log("CLICKED EDIT")
            break;
        case "post__btnDelete":
            console.log("CLICKED DELETE")
            break;
    }
})

// list entire posts dashboard item on DOM
export const listPosts = () => {
    getPosts()
    .then(() => {
        const posts = usePosts()
        const sortedPosts = sortPosts(posts)
        renderPostDashboard(sortedPosts);
    })
}

// Render entire post section
const renderPostDashboard = (sortedPostArray) => {
    const targetElement = document.querySelector(".posts")
    targetElement.innerHTML = postBoxHTML(sortedPostArray);
    targetElement.innerHTML += newPostHTML();
}

// Sort posts for most recent at bottom
const sortPosts = (postArray) => {
    return postArray.sort((post1, post2) => post1.currentTimeStamp - post2.currentTimeStamp)
}