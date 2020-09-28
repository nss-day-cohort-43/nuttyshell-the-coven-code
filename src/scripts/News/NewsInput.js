import { saveNewsEntry } from "./NewsDataProvider.js";

const newsContainer = document.querySelector(".news");

// Displays the Input format for entering new article information
// and a Save button
export const newNewsArticle = () => {
return  `  <fieldset class="newsEntryForm">
                <div id="closeNewArticle">X</div>
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
newsContainer.addEventListener("click", e => {
    const urlInput = document.querySelector("#newsUrl");
    const newsTitle = document.querySelector("#newsTitle");
    const newsDescription = document.querySelector("#newsDescription")

    if(e.target.id === "newsSave"){
    const newArticle = {
        url: urlInput.value,
        title: newsTitle.value,
        synopsis: newsDescription.value,
        currentTimeStamp: new Date().getTime(),
        userId: parseInt(sessionStorage.getItem("activeUser"))
    }
    saveNewsEntry(newArticle)
}}
)
  