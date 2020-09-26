// Module goals: render editing form and listen for save button click

import { getSelectedPost, editPost } from "./PostProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", e => {
    // SAVE BUTTON CLICK CHECKING HERE

    // SAVE THE FOLLOWING: 
    //  "id": 1,
    //   "post": "Meet me on the beach's edge at the witching hour.",
    //   "currentTimeStamp": 1,
    //   "userId": 2
})

export const EditPostForm = postId => {
    getSelectedPost(postId)
        .then((response) => {
            document.querySelector(`#postId--${postId}`).innerHTML = `
            <input type="hidden" value="${response.id}" id="postEdit--postId">
            <input type="hidden" value="${response.userId}" id="postEdit--userId">
            <span class="single__username">${response.user.username}</span>
            <span class="single__timeStamp">${response.currentTimeStamp}</span>
            <button id="post__btnSave--${postId}" type="button">Save Edit</button>
            `
        })
}