// Authored by Sam Edwards
// Module goals:
    // import all needed scripts for Posts Section
    // render all post elements
    // handle eventHub clicks

import { getPosts, usePosts, savePost, deletePost } from "./PostProvider.js"
import { postBoxHTML } from "./PostBoxHTML.js"
import { newPostHTML } from "./PostNewHTML.js"
import { dispatchEditBtnPress } from "./EditPost.js"

const eventHub = document.querySelector(".container")

// When changes to posts occur, re-render notes
eventHub.addEventListener("postStateChanged", e => {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
    listPosts(activeUser);
})

// Listen for button clicks in Posts section
eventHub.addEventListener("click", e => {
    if (e.target.id === "post__btnPost") {
        // When users click Post Button, save entered data
            // If user has entered no data, do not post
        const postMessage = document.querySelector("#newPost")

        if (postMessage.value !== "") {
            const newPost = {
                post: postMessage.value,
                originalTimeStamp: Date.now(),
                editedTimeStamp: 0,
                userId: parseInt(sessionStorage.getItem("activeUser"))
            }
            savePost(newPost)
        } else {
            alert("No post entered.")
        }
    }

    // When users click Edit Button, store post and dispatch edit press event
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

// List entire Posts Section on DOM
export const listPosts = (activeUser) => {
    getPosts()
    .then(() => {
        const posts = usePosts()
        const sortedPosts = sortPosts(posts)
        renderPostDashboard(activeUser, sortedPosts);
    })
}

// Sort posts with most recent at bottom
const sortPosts = (postArray) => {
    return postArray.sort((post1, post2) => post1.originalTimeStamp - post2.originalTimeStamp)
}

// Set scroll bar location to bottom
const postBoxScroll = () => {
    const postBox = document.querySelector(".post__list")
    postBox.scrollTop = postBox.scrollHeight;
}

// Render entire Posts Section
const renderPostDashboard = (activeUser, sortedPostArray) => {
    const targetElement = document.querySelector(".posts")
    targetElement.innerHTML = postBoxHTML(activeUser, sortedPostArray);
    targetElement.innerHTML += newPostHTML();
    // Ensures scroll bar is always at bottom
    postBoxScroll();
}