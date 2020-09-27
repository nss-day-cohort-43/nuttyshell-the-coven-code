// Module goal: allow user to edit a saved post

import { getSelectedPost, editPost } from "./PostProvider.js"
import { checkDate } from "./PostBoxHTML.js"

const eventHub = document.querySelector(".container")

// Stores original post so Cancel Button can re-render correct HTML
let originalPost = "";

// Allows only one post to be editable at a time. Otherwise, originalPost can be overwritten
let currentlyEditing = false;

// Listen for when user has clicked edit button, then:
    // 1. store original post
    // 2. render form
    // 3. set editing true
eventHub.addEventListener("postEditBtnPressed", e => {
    if (currentlyEditing === false) {
        originalPost = e.detail.originalPost
        EditPostForm(e.detail.id)
        currentlyEditing = true;
    } else {
        window.alert("Can only edit one post at a time.")
    }
})

// Listen for user click on save or cancel edit buttons
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("post__btnSave--")) {
        const [prefix, id] = e.target.id.split("--")
        const editedPost = { 
            id: parseInt(document.querySelector(`#postEdit--postId--${id}`).value),
            post: document.querySelector(`#postEdit--text--${id}`).value,
            originalTimeStamp: parseInt(document.querySelector(`#postEdit--originalTimeStamp--${id}`).value),
            editedTimeStamp: Date.now(),
            userId: parseInt(document.querySelector(`#postEdit--userId--${id}`).value)
        }
        editPost(editedPost, id)
        currentlyEditing = false;
    }
    // Resets message to original state
    if (e.target.id.startsWith("post__btnCancel--")) {
        e.target.parentElement.innerHTML = originalPost
        currentlyEditing = false;
    }
})

// Generates HTML for post editing form
export const EditPostForm = postId => {
    getSelectedPost(postId)
        .then((response) => {
            document.querySelector(`#postId--${postId}`).innerHTML = `
            <input type="hidden" value="${response.id}" id="postEdit--postId--${postId}">
            <input type="hidden" value="${response.userId}" id="postEdit--userId--${postId}">
            <input type="hidden" value="${response.originalTimeStamp}" id="postEdit--originalTimeStamp--${postId}">
            <span class="single__username">${response.user.username}</span>
            ${checkDate(response)}
            <textarea id="postEdit--text--${postId}">${response.post}</textarea>
            <button id="post__btnSave--${postId}" type="button">Save Edit</button>
            <button id="post__btnCancel--${postId}" type="button">Cancel Edit</button>
            `
        })
}