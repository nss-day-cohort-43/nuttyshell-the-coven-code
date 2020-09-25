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
    if (e.target.id === "post__btnPost") {
        // When users clicks Post, save entered data
            // If no data entered, do not post
            // Need to save
                // userID
                // timeStamp
                // Message
                // messageID is auto generated
        console.log("CLICKED POST")

        const postMessage = document.querySelector("#newPost")

        if (postMessage.value !== "") {
            const newPost = {
                post: postMessage.value,
                currentTimeStamp: Date.now(),
                // PULL USERID FROM SESSION STORAGE
                userId: 1
            }

            // savePost function runs here
        }
    }
    if (e.target.id.startsWith("post__btnEdit--")) {
        const [prefix, id] = e.target.id.split("--")
        console.log("CLICKED EDIT", id)
    }
    if (e.target.id.startsWith("post__btnDelete--")) {
        const [prefix, id] = e.target.id.split("--")
        console.log("CLICKED DELETE", id)
    }
})

// List entire posts dashboard item on DOM
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