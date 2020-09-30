// author: Tristan Wyatt
import { saveNewsEntry } from "./NewsDataProvider.js";

const newsContainer = document.querySelector(".news");

// Displays the Input format for entering new article information
// and a Save button
export const newNewsArticle = () => {
return  `  <form class="newsEntryForm">
                <div id="closeNewArticle">X</div>
                <fieldset>
                <label for="newsTitle">Title:</label>
                <input type="text" style='width:15em' name="newsTitle" id="newsTitle">
                </fieldset>

                <fieldset>
                <label for="newsUrl">Link:</label>
                <input type="text" style='width:15em' name="newsUrl" id="newsUrl" value="https://">
                </fieldset>

                <fieldset>
                <label for="newsDescription">About:</label>
                <input type="text" style='width:15em' name="newsDescription" id="newsDescription">
                </fieldset>

                <button id="newsSave">Save</button>
            </form>
        `
}

// Click event for Save button for New Articles
// Gathers the input values and saves to the Database.json
newsContainer.addEventListener("click", e => {
    const urlInput = document.querySelector("#newsUrl");
    const newsTitle = document.querySelector("#newsTitle");
    const newsDescription = document.querySelector("#newsDescription")

    if(e.target.id === "newsSave"){

        if(newsContainer.value || newsDescription.value  !== "") {
            const newArticle = {
                url: urlInput.value,
                title: newsTitle.value,
                synopsis: newsDescription.value,
                currentTimeStamp: new Date().getTime(),
                userId: parseInt(sessionStorage.getItem("activeUser"))
            }
            saveNewsEntry(newArticle)
            } else {
            alert("Please Complete all fields")
        }
    }
})
  