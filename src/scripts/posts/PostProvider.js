// Module goals: fetch posts, export usable posts, save posts, edit posts, dispatch changes to eventHub

const eventHub = document.querySelector(".container")

let posts = []

// When a change to posts occurs, dispatch change to eventHub
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
    .then(getPosts)
    .then(dispatchPostStateChanged)
}

// delete posts, needs to filter in a specific postID

// edit posts