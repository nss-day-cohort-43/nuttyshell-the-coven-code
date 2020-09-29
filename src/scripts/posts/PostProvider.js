// Authored by Sam Edwards
// Module goals: fetch, export, save, edit, delete, and dispatch post changes to eventHub

const eventHub = document.querySelector(".container")

let posts = []

// When a change occurs to posts, dispatch change to eventHub
const dispatchPostStateChanged = () => {
    const postStateChangedEvent = new CustomEvent("postStateChanged")
    eventHub.dispatchEvent(postStateChangedEvent)
}

// Export usable posts array
export const usePosts = () => [...posts]

// Fetch posts from database with user info included
export const getPosts = () => {
    return fetch ('http://localhost:8088/posts?_expand=user')
        .then(response => response.json())
        .then(parsedPosts => {
            posts = parsedPosts
        })
}

// Save created post
export const savePost = postObj => {
    return fetch ('http://localhost:8088/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
    .then(dispatchPostStateChanged)
}

// Delete post with selected ID
export const deletePost = postId => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
    .then(dispatchPostStateChanged)
}

// To generate edit form, retrieve only selected post's data
export const getSelectedPost = postId => {
    return fetch(`http://localhost:8088/posts/${postId}?_expand=user`)
        .then(response => response.json())
}

// Edit post with selected ID
export const editPost = (editedPost, postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedPost)
    })
    .then(dispatchPostStateChanged)
}