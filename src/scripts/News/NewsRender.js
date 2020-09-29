// author: Tristan Wyatt
const targetContainer = document.querySelector(".news");

// Simple function that tells the content/HTML what element container to render too
export const renderNews = (newsToRender) => {
    targetContainer.innerHTML = newsToRender
};

