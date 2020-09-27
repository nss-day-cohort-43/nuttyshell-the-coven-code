// Module goal: allow user to edit a saved post

import { getSelectedPost, editPost } from "./PostProvider.js"
import { checkDate } from "./PostBoxHTML.js"

const eventHub = document.querySelector(".container")

// Stores original post so Cancel Button can re-render correct HTML
let originalPost = "";

// Allows only one post to be editable at a time. Otherwise, originalPost can be overwritten
let currentlyEditing = false;

// I THINK WE CAN REMOVE THE CUSTOM EVENT
// AND HAVE ALL THE SAVING OF INFORMATION HAPPEN
// IN IMMEDIATE EDIT BTN PRESS

// Custom event for when user clicks Edit Button:
    // saves original message, so user can cancel editing
    export const dispatchEditBtnPress = (post, id) => {
        const postEditBtnPress = new CustomEvent("postEditBtnPressed", {
            detail: {
                id: id,
                originalPost: post.innerHTML
            }
        })
        eventHub.dispatchEvent(postEditBtnPress)
    }

// Listen for when user has clicked Edit Button, then:
    // 1. store original post
    // 2. render form
    // 3. set editing to true
eventHub.addEventListener("postEditBtnPressed", e => {
    if (currentlyEditing === false) {
        originalPost = e.detail.originalPost
        EditPostForm(e.detail.id)
        currentlyEditing = true;
    } else {
        window.alert("Can only edit one post at a time.")
    }
})

// Listen for user click on Save or Cancel buttons
eventHub.addEventListener("click", e => {
    const clicked = e.target.id
    if (clicked.startsWith("post__btnSave--")) {
        const [prefix, id] = clicked.split("--")
        // Saves all edited data
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
    // Resets post to original state
    if (clicked.startsWith("post__btnCancel--")) {
        e.target.parentElement.innerHTML = originalPost
        currentlyEditing = false;
    }
    // Fixes bug where, if Edit form is open and user causes list to re-render,
    // currentlyEditing stays true, making edits impossible
    if (clicked === "post__btnPost" && document.querySelector(".new__textarea").value !== "" || clicked.startsWith("post__btnDelete")) {
        currentlyEditing = false
    }
    // Fixes bug when user clicks Post Button without entering text,
    // currentlyEditing reverts to false without a re-render and multiple edit boxes can appear
    if (clicked === "post__btnPost" && document.querySelector(".new__textarea").value === "" && currentlyEditing === true) {
        currentlyEditing = true;
    }
})

// Generates HTML for post editing form
const EditPostForm = postId => {
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