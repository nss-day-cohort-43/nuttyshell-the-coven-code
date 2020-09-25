// Module goal: generate HTML for post entry box

export const newPostHTML = () => {
    return `
    <form method="post" class="post__new">
        <label class="new__label" for="newPost">Create new post</label>
        <textarea class="new__textarea" name="newPost" id="newPost" rows="2"></textarea>
        <button id="post__btnPost" class="new__btn-post" type="button">Post</button>
    </form>
    `
}