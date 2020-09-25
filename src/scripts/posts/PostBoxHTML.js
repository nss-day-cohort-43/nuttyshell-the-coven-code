// Module goal: generate HTML for currently saved entries

export const postBoxHTML = (postArray) => {
    return `
        <h2>Posts</h2>
        <div class="post__list">
            ${
                postArray.map(post => {
                    return `
                    <p class="post__single"><span class="single__username">${post.user.username}</span> <span class="single__timeStamp">${post.currentTimeStamp}</span> <span class="single__post">${post.post}</span> <button id="post__btnEdit" type="button">EDIT BTN</button> <button id="post__btnDelete" type="button">DELETE BTN</button></p>
                    `
                }).join("")
            }
        </div>
    `
}