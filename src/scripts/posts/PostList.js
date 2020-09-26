// Module goals:
    // import all needed scripts for the posts section
    // render all elements
    // handle  eventHub clicks

// Requirements:
    // DONE -- create posts
    // DONE -- Posts must be prepended with user's name (and a timestamp)
    // DONE -- sort posts so the most recent is at bottom
    // Save posts
    // Delete posts

import { getPosts, usePosts, savePost, deletePost } from "./PostProvider.js"
import { postBoxHTML, postBoxScroll } from "./PostBoxHTML.js"
import { newPostHTML } from "./PostNewHTML.js"
import { EditPostForm } from "./EditPost.js"


const eventHub = document.querySelector(".container")

// Custom event for when the Edit button is clicked
// Tell edit script to render edit form
// It's separated out because the edit script stores the original message
// So the user can cancel an edit.
const dispatchEditBtnPress = (post, id) => {
    const editBtnPress = new CustomEvent("editBtnPressed", {
        detail: {
            id: id,
            originalPost: post.innerHTML
        }
    })
    eventHub.dispatchEvent(editBtnPress)
}

// When a change to posts occurs, re-render notes
eventHub.addEventListener("postStateChanged", e => {
    listPosts();
})

// Listen for all button clicks in Posts dashboard item
eventHub.addEventListener("click", e => {
    if (e.target.id === "post__btnPost") {
        // When users clicks Post, save entered data
            // If no data entered, do not post
        const postMessage = document.querySelector("#newPost")

        if (postMessage.value !== "") {
            const newPost = {
                post: postMessage.value,
                currentTimeStamp: Date.now(),
                userId: parseInt(sessionStorage.getItem("activeUser"))
            }
            savePost(newPost)
        }
    }
    if (e.target.id.startsWith("post__btnEdit--")) {
        const [prefix, id] = e.target.id.split("--")
        const originalPost = document.querySelector(`#${e.target.id}`).parentElement
        dispatchEditBtnPress(originalPost, id)
    }
    if (e.target.id.startsWith("post__btnDelete--")) {
        const [prefix, id] = e.target.id.split("--")
        deletePost(id);
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
    postBoxScroll();
}

// Sort posts for most recent at bottom
const sortPosts = (postArray) => {
    return postArray.sort((post1, post2) => post1.currentTimeStamp - post2.currentTimeStamp)
}