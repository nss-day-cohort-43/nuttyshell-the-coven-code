// Module goal: generate HTML for post dashboard item

export const PostDashboardHTML = (postArray) => {
    return `
        <h2>Posts</h2>
        <div class="post__list">
            ${
                postArray.map(post => {
                    return `
                    <p class="post__single"><span class="single__username">$</span> <span class="single__timeStamp">TIMESTAMP</span> <span class="single__post">POST CONTENT HERE</span> <span>EDIT BTN</span> <span>DELETE BTN</span></p>
                    
                    `
                })
            }
            <p class="post__single"><span class="single__username">USERNAME</span> <span class="single__timeStamp">TIMESTAMP</span> <span class="single__post">POST CONTENT HERE</span> <span>EDIT BTN</span> <span>DELETE BTN</span></p>
        </div>
        <form method="post" class="post__new">
            <label class="new__label" for="newPost">Create new post</label>
            <textarea class="new__textarea" name="newPost" id="newPost" rows="2"></textarea>
            <button class="new__btn-post" type="button">Post</button>
        </form>
    `
}