// Module goal: generate HTML for currently saved posts

const activeUser = parseInt(sessionStorage.getItem("activeUser"))

// Sets scroll bar location to bottom
export const postBoxScroll = () => {
    const postBox = document.querySelector(".post__list")
    postBox.scrollTop = postBox.scrollHeight;
}

// Generate HTML for entire post box section ("post box" is like a "chat box")
    // Includes if-else check so only activeUsers can delete their own posts.
    // Also allows for activeUsers to have unique styling.
export const postBoxHTML = (postArray) => {
    return `
        <h2>Posts</h2>
        <div class="post__list">
            ${
                postArray.map(post => {
                    if (activeUser === post.userId) {
                        return `
                        <p id="postId--${post.id}" class="post__single single__active">
                            <span class="single__username">${post.user.username}</span>
                            ${checkDate(post)}
                            <span class="single__post">${post.post}</span> <button id="post__btnEdit--${post.id}" type="button">EDIT BTN</button>
                            <button id="post__btnDelete--${post.id}" type="button">DELETE BTN</button>
                        </p>
                        `
                    } else {
                        return `
                        <p id="postId--${post.id}" class="post__single">
                            <span class="single__username">${post.user.username}</span>
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

// Generates date and checks if post has been edited. If so, add edited time stamp
export const checkDate = (post) => {
    const originalTimeStamp = `<span class="single__originalTimeStamp">posted at ${new Date(post.originalTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>`
    
    if (post.editedTimeStamp === 0) {
        return `
        ${originalTimeStamp}
        `
    } else {
        return `
        ${originalTimeStamp}
        <span class="single__editedTimeStamp">edited at ${new Date(post.editedTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} -</span>
        `
    }
}