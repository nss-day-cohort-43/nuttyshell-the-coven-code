// Module goals
    // fetch posts from database
    // export usable posts
    // save new post
    // edit saved post

const eventHub = document.querySelector(".container")

let posts = []

// need a dispatch for when posts change

// Fetch posts from database with user info included
export const getPosts = () => {
    return fetch ('http://localhost:8088/posts?_expand=user')
        .then(response => response.json())
        .then(parsedPosts => {
            posts = parsedPosts
        })
}

// Export usable posts array
export const usePosts = () => [...posts]

// save posts

// delete posts, needs to filter in a specific postID

// edit posts