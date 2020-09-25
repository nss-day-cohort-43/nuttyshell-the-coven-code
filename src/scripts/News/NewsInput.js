import { saveNewsEntry } from "./NewsDataProvider.js";

// Displays the Input format for entering new article information
// and a Save button
export const newNewsArticle = () => {
return  `  <fieldset class="newsEntryForm">
                <label for="newsTitle">Title</label>
                <input type="text" name="newsTitle" id="newsTitle">


                <label for="newsUrl">Link</label>
                <input type="text" name="newsUrl" id="newsUrl">


                <label for="newsDescription">About</label>
                <input type="text" name="newsDescription" id="newsDescription">
                <button id="newsSave">Save</button>
            </fieldset>
        `
}


// Click event for Save button for New Articles
// Gathers the input values and saves to the Database.json
const newsContainer = document.querySelector(".news")

newsContainer.addEventListener("click", e => {
    const urlInput = document.querySelector("#newsUrl");
    const newsTitle = document.querySelector("#newsTitle");
    const newsDescription = document.querySelector("#newsDescription")

    getUsersId();

    if(e.target.id === "newsSave"){
    const newArticle = {
        url: urlInput.value,
        title: newsTitle.value,
        synopsis: newsDescription.value,
        currentTimeStamp: new Date().getTime,
        userId: parseInt(usersId)
    }
    saveNewsEntry(newArticle)
}}
)




let users

const useUsers = () => {
    return [...users]
}

const getUsers = async() => {
    let response = await fetch("http://localhost:8080/users")
    users = await response.json()
    return users
};

let usersId;

const getUsersId = () => {
    getUsers()
    .then(() => {
        let users = useUsers()
        users.map(user => {
            if(user.username === sessionStorage.getItem("username")){
                usersId = user.id
                return usersId
            }
        })
    })
}