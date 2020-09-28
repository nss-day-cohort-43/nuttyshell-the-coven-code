// author: Tristan Wyatt
import { allTheNews } from "./News.js";

let news;

export const useNews = () => {
    return [...news]
};

export const getNews = async() => {
    let response = await fetch("http://localhost:8088/news")
    news = await response.json()
    return news
};

export const saveNewsEntry = (newsEntry) => {
    fetch("http://localhost:8088/news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newsEntry)
    })
    .then(allTheNews)
}

export const deleteNewsEntry = (entryId) => {
    fetch(`http://localhost:8088/news/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(allTheNews)
}

export const editNewsEntry = (entryId, newsArticle) => {
    fetch(`http://localhost:8088/news/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newsArticle)
    })
    .then(allTheNews)
}

export const singleNewsArticle = async(entryId) => {
    let response = await fetch(`http://localhost:8088/news/${entryId}`)
    news = await response.json()
    return news
};