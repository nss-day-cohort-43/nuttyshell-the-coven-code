// author: Tristan Wyatt
import { singleNewsArticle, editNewsEntry } from "./NewsDataProvider.js";
const newsContainer = document.querySelector(".news")

// News html format that sorts the articles by Timestamp
// and builds out the html for each article container
// as well as the Edit & Delete buttons
export const newsHtmlFormat = (newsArticle) => {
    sorting(newsArticle)
    return `
    <h2 class="newsHeader">News</h2></section>
        <div id="addNews" title="Add New">+</div>
        ${newsArticle.map(news => {
         return `
           <div id="article--${news.id}" class="articleContainer"> 
            <a id="articleTag--${news.id}" class="newsTitle" href="${news.url}" target="_blank">"${news.title}"</a><br>
            <p id="newsDescription--${news.id}">-${news.synopsis}</p>
            <button id="edit--${news.id}" class="edit" title="Edit">✎</button><button id="delete--${news.id}" class="delete" title="Delete">✘</button>
           </div> 
            `
        }).join("")
    }
    `
}

// Used for sorting Articles by Time before being rendered to news Container
const sorting = (sortObj) => {
    sortObj.sort((a, b) => {
        if(a.currentTimeStamp > b.currentTimeStamp ) {
            return -1;
        }
    })
}

// Event listener for Edit button to populate newsContainer innerHTML
// with inputs fields to edit the current article
// and also includes a Save button
newsContainer.addEventListener("click", e => {
    const [prefix, id] = e.target.id.split("--")
    
     if(e.target.id.startsWith("edit--")){
        singleNewsArticle(id)
        .then((response) => {
        document.querySelector(`#article--${id}`).innerHTML =`
        <input id="articleTag--${id}" value="${response.title}"/>
        <input id="url--${id}"value="${response.url}"/>
        <input id="newsDescription--${id}" value="${response.synopsis}"/>
        <button id="saveArticle--${id}" class="articleSaveBtn">Save</button>
        `
        })
    }
})

// Event listener for Save button
// Upon click the values from the input field
// Are updated in the Article and passed as an argument
// in the form of an Object to update the information
// into the editNewsEntry function located in NewsDataProvider.js
newsContainer.addEventListener("click", e => {
    const [prefix, id] = e.target.id.split("--")

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
        editNewsEntry(id, newArticle)
    }
})