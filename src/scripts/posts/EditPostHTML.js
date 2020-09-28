// Authored by Sam Edwards
// Module goal: generate HTML for editing post

import { getSelectedPost } from "./PostProvider.js"
import { checkDate } from "./PostBoxHTML.js"

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