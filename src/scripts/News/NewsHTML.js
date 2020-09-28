// News html format that sorts the articles by Timestamp
// and builds out the html for each article container
// as well as the Edit & Delete buttons

import { singleNewsArticle, editNewsEntry } from "./NewsDataProvider.js";



export const newsHtmlFormat = (newsArticle) => {
    sorting(newsArticle)
    return `
    <h2 class="newsHeader">News</h2></section>
        <div id="addNews">+</div>
        ${newsArticle.map(news => {
         return `
           <div id="article--${news.id}" class="articleContainer"> 
            <a id="articleTag--${news.id}" class="newsTitle" href="${news.url}" target="_blank" contenteditable="false">"${news.title}"</a><br>
            <p id="newsDescription--${news.id}" contenteditable="false">-${news.synopsis}</p>
            <button id="edit--${news.id}" class="edit">✎</button><button id="delete--${news.id}" class="delete">✘</button>
           </div> 
            `
        }).join("")
    }
    `
}

const sorting = (sortObj) => {
    sortObj.sort((a, b) => {
        if(a.currentTimeStamp > b.currentTimeStamp ) {
            return -1;
        }
    })
}

const newsContainer = document.querySelector(".news")



newsContainer.addEventListener("click", e => {
    const [prefix, id] = e.target.id.split("--")
    
    singleNewsArticle(id)
    .then((response) => {

    if(e.target.id.startsWith("edit--")){
        document.querySelector(`#article--${id}`).innerHTML =`
        <input id="articleTag--${id}" value="${response.title}"/>
        <input id="url--${id}"value="${response.url}"/>
        <input id="newsDescription--${id}" value="${response.synopsis}"/>
        <button id="saveArticle--${id}" class="articleSaveBtn">Save</button>
        `
        
        }
    })
})


newsContainer.addEventListener("click", e => {
    const [prefix, id] = e.target.id.split("--")
    console.log(id)

    if(e.target.id.startsWith("saveArticle")){
        const article = document.querySelector(`#articleTag--${id}`)
        const url = document.querySelector(`#url--${id}`)
        const newsDescription = document.querySelector(`#newsDescription--${id}`)

        const newArticle = {
            url: url.value,
            title: article.value,
            synopsis: newsDescription.value,
            currentTimeStamp: new Date().getTime(),
            userId: parseInt(sessionStorage.getItem("activeUser"))
        }
        console.log(id)
        editNewsEntry(id, newArticle)
    }
})