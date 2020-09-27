// Module goals:
    // import all needed scripts for posts section
    // render all post elements
    // handle eventHub clicks

import { getPosts, usePosts, savePost, deletePost } from "./PostProvider.js"
import { postBoxHTML, postBoxScroll } from "./PostBoxHTML.js"
import { newPostHTML } from "./PostNewHTML.js"
// Although this function is never called, the following line allows it to run
import { EditPostForm } from "./EditPost.js"

const eventHub = document.querySelector(".container")

// Custom event for when user clicks Edit button:
// Saves the original message so the user can cancel edit
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

// Listen for all button clicks in Posts section
eventHub.addEventListener("click", e => {
    if (e.target.id === "post__btnPost") {
        // When users clicks Post, save entered data
            // If no data entered, do not post
        const postMessage = document.querySelector("#newPost")

        if (postMessage.value !== "") {
            const newPost = {
                post: postMessage.value,
                originalTimeStamp: Date.now(),
                editedTimeStamp: 0,
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

// List entire posts section on DOM
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

// Sort posts with most recent at bottom
const sortPosts = (postArray) => {
    return postArray.sort((post1, post2) => post1.currentTimeStamp - post2.currentTimeStamp)
}