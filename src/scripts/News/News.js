//author: Tristan
import { useNews, getNews, deleteNewsEntry } from "./NewsDataProvider.js";
import { newsHtmlFormat } from "./NewsHTML.js";
import { newNewsArticle } from "./NewsInput.js";
import { renderNews } from "./NewsRender.js";
import { getFriends, useFriends } from "../friends/FriendProvider.js";

const newsContainer = document.querySelector(".news")
const activeUser = parseInt(sessionStorage.getItem("activeUser"));

// Renders all the news to the News container innerHTML based on the activeUser signed in
export const allTheNews = async() => {
    await getNews()

    .then(() => {
        let news = useNews()
        let userNews = news.filter(news => news.userId === parseInt(sessionStorage.getItem("activeUser")))
       
        let newsHtml = newsHtmlFormat(userNews)
        renderNews(newsHtml)
    })
}


export const newsForFriends = async() => {
    await getNews()
    await getFriends(activeUser)
    const news = useNews()
    const friends = useFriends()

   news.map(news => {

        friends.map(friends => {
            if(news.userId === friends.userId){
                 return news
            }
            
        })
        
    })
}
newsForFriends()



// Click event that targets the Plus Sign of News container 
// and sets that container for new input, but if container is on the input
// page an X appears, and checks for closeNewArticle Id to enable
// closing the page to return to all current Articles Rendered
newsContainer.addEventListener("click", e => {
    if(e.target.id === "addNews"){
    newsContainer.innerHTML = newNewsArticle()
    } else if(e.target.id === "closeNewArticle"){
        allTheNews()
    }
})

// Click event for Delete Button that deletes Entry from Database.json//
newsContainer.addEventListener("click", e => {
    if(e.target.id.startsWith("delete--")){
        const [prefix, id] = e.target.id.split("--")
        deleteNewsEntry(id)
    }
});
