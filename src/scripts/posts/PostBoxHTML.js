// Module goal: generate HTML for currently saved entries

// Includes if else check so only activeUsers can delete their own posts.

const activeUser = parseInt(sessionStorage.getItem("activeUser"))

export const postBoxHTML = (postArray) => {
    return `
        <h2>Posts</h2>
        <div class="post__list">
            ${
                postArray.map(post => {
                    if (activeUser === post.userId) {
                        return `
                        <p class="post__single"><span class="single__username">${post.user.username}</span> <span class="single__timeStamp">${new Date(post.currentTimeStamp).toLocaleTimeString("en-US")}</span> <span class="single__post">${post.post}</span> <button id="post__btnEdit--${post.id}" type="button">EDIT BTN</button> <button id="post__btnDelete--${post.id}" type="button">DELETE BTN</button></p>
                        `
                    } else {
                        return `
                        <p class="post__single"><span class="single__username">${post.user.username}</span> <span class="single__timeStamp">${new Date(post.currentTimeStamp).toLocaleTimeString("en-US")}</span> <span class="single__post">${post.post}</span></p>
                        `
                    }
                }).join("")
            }
        </div>
    `
}