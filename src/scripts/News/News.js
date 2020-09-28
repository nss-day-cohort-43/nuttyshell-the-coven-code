import { useNews, getNews, deleteNewsEntry } from "./NewsDataProvider.js";
import { newsHtmlFormat } from "./NewsHTML.js";
import { newNewsArticle } from "./NewsInput.js";
import { renderNews } from "./NewsRender.js";

const newsContainer = document.querySelector(".news")


// Renders all the news to the News container innerHTML
export const allTheNews = () => {
    getNews()
    .then(() => {
        let news = useNews()
        let newsHtml = newsHtmlFormat(news)
        renderNews(newsHtml)
    })
}

// Click event that targets the Plus Sign of News container 
// and sets that container 
newsContainer.addEventListener("click", e => {
    if(e.target.id === "addNews"){
    newsContainer.innerHTML = newNewsArticle()
    }
})

// Click event for Delete Button that deletes Entry from Database.json//
newsContainer.addEventListener("click", e => {
    if(e.target.id.startsWith("delete--")){
        const [prefix, id] = e.target.id.split("--")
        deleteNewsEntry(id)
    }
});
