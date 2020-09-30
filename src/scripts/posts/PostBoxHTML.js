// Authored by Sam Edwards
// Module goal: generate HTML for currently saved posts

// Generates date HTML and checks if post has been edited. If so, add edited time stamp
export const checkDate = (post) => {
    const originalTimeStamp = `<span class="single__originalTimeStamp">posted at ${new Date(post.originalTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>`
    const editedTimeStamp = `<span class="single__editedTimeStamp">edited at ${new Date(post.editedTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>`
    
    return (post.editedTimeStamp === 0 ? `${originalTimeStamp}` : `${originalTimeStamp} ${editedTimeStamp}`)
}

// Generate HTML for entire post box section ("post box" is like a "chat box")
    // Includes if-else check so only activeUsers can delete their own posts.
    // Also allows for activeUsers to have unique styling.
export const postBoxHTML = (activeUser, postArray) => {
    return `
        <h2 class="postHeader">Posts</h2>
        <div class="post__list">
            ${
                postArray.map(post => {
                    // To reduce repeated strings, store username in variable
                    const username = `<span id="single__username--${post.user.id}"class="single__username">${post.user.username}</span>`

                    if (activeUser === post.userId) {
                        return `
                        <p id="postId--${post.id}" class="post__single single__active">
                            ${username}
                            ${checkDate(post)}
                            <span class="single__post">${post.post}</span> <button id="post__btnEdit--${post.id}" type="button">✎</button>
                            <button id="post__btnDelete--${post.id}" type="button">✘</button>
                        </p>
                        `
                    } else {
                        return `
                        <p id="postId--${post.id}" class="post__single">
                            ${username}
                            ${checkDate(post)}
                            <span class="single__post">${post.post}</span>
                        </p>
                        `
                    }
                }).join("")
            }
        </div>
    `
}