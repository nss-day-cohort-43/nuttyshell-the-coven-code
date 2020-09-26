// Module goals: render editing form and listen for save button click

import { getSelectedPost, editPost } from "./PostProvider.js"

const eventHub = document.querySelector(".container")

let originalPost = "";

let currentlyEditing = false;

eventHub.addEventListener("editBtnPressed", e => {
    if (currentlyEditing === false) {
        originalPost = e.detail.originalPost
        EditPostForm(e.detail.id)
        currentlyEditing = true;
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("post__btnSave--")) {
        const [prefix, id] = e.target.id.split("--")
        const editedPost = { 
            id: parseInt(document.querySelector(`#postEdit--postId--${id}`).value),
            post: document.querySelector(`#postEdit--text--${id}`).value,
            currentTimeStamp: Date.now(),
            userId: parseInt(document.querySelector(`#postEdit--userId--${id}`).value)
        }
        console.log(editedPost)
        currentlyEditing = false;
    }
    if (e.target.id.startsWith("post__btnCancel--")) {
        e.target.parentElement.innerHTML = originalPost
        currentlyEditing = false;
    }
})

export const EditPostForm = postId => {
    getSelectedPost(postId)
        .then((response) => {
            document.querySelector(`#postId--${postId}`).innerHTML = `
            <input type="hidden" value="${response.id}" id="postEdit--postId--${postId}">
            <input type="hidden" value="${response.userId}" id="postEdit--userId--${postId}">
            <span class="single__username">${response.user.username}</span>
            <span class="single__timeStamp">${new Date(response.currentTimeStamp).toLocaleTimeString("en-US")}</span>
            <textarea id="postEdit--text--${postId}">${response.post}</textarea>
            <button id="post__btnSave--${postId}" type="button">Save Edit</button>
            <button id="post__btnCancel--${postId}" type="button">Cancel Edit</button>
            `
        })
}