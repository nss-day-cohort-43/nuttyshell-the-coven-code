// News html format that sorts the articles by Timestamp
// and builds out the html for each article container
// as well as the Edit & Delete buttons


export const newsHtmlFormat = (newsArticle) => {
    return `
    <h2 class="newsHeader">News</h2></section>
        <div id="addNews">+</div>
    ${newsArticle.sort((a, b) => {
        if(a.currentTimeStamp > b.currentTimeStamp ) {
            return -1;
        }
    })}
        ${newsArticle.map(news => {
         return `
           <div class="articleContainer"> 
            <a class="newsTitle" href="${news.url}" target="_blank"><h4>"${news.title}"<h4></a>
            <p>-${news.synopsis}<button id="edit--${news.id}" class="edit">✎</button><button id="delete--${news.id}" class="delete">✘</button></p>
           </div> 
            `
        }).join("")
    }
    `
}
