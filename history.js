const visitedPages = localStorage.getItem('visitedPages');
  if (!visitedPages) {
    const history = [window.location.pathname]
    console.log("new history: " + history)
    localStorage.setItem('visitedPages', JSON.stringify(history));
  }
  else {
    const history = JSON.parse(localStorage.getItem('visitedPages')) || [];
    history.push(window.location.pathname);
    console.log("updated history: " + history)
    localStorage.setItem('visitedPages', JSON.stringify(history));
  }

const img = document.getElementById("img")[0];
let newNode = document.createElement("div");
let link = document.createElement("a");
let parent = document.getElementById("img").parentElement;
link.href = "#0";
newNode.id = "favorite";
newNode.innerHTML = "<h2>Favorite</h2>";
link.appendChild(newNode);
parent.insertBefore(link, img);


let clicked = false;
if (localStorage.getItem('favoritedPages')) {
    const favoritedPages = JSON.parse(localStorage.getItem('favoritedPages')) || [];
    for (let i = 0; i < favoritedPages.length; i++) {
        if (favoritedPages[i] === window.location.pathname) {
            newNode.innerHTML = "<h2 style='color: yellow;'>Favorited!</h2>";
            clicked = true;
        }
    }
}

link.addEventListener("click", () => {
    if (!clicked) {
    const favoritedPages = JSON.parse(localStorage.getItem('favoritedPages')) || [];
    favoritedPages.push(window.location.pathname);
    localStorage.setItem('favoritedPages', JSON.stringify(favoritedPages));
    newNode.innerHTML = "<h2 style='color: yellow;'>Favorited!</h2>";
    console.log("favorited")
    clicked = true;
}
else {
    const favoritedPages = JSON.parse(localStorage.getItem('favoritedPages')) || [];
    for (let i = 0; i < favoritedPages.length; i++) {
        if (favoritedPages[i] === window.location.pathname) {
            if (favoritedPages.length === 1) {
                localStorage.removeItem('favoritedPages');
                break;
            }

            favoritedPages.splice(i, 1);
        }
    }
    localStorage.setItem('favoritedPages', JSON.stringify(favoritedPages));
    newNode.innerHTML = "<h2>Favorite</h2>";
    console.log("unfavorited")
    clicked = false;
}
    
});


const reviewsDiv = document.getElementById("reviews");

const form = document.createElement("form");
const input = document.createElement("input");
const submitButton = document.createElement("button");

input.type = "text";
input.id = "review"
input.placeholder = "Type your review...";
submitButton.textContent = "Submit";

form.appendChild(input);
form.appendChild(submitButton);
reviewsDiv.appendChild(form);

form.addEventListener("submit", leaveAReview);

function leaveAReview(event) {
    event.preventDefault();
    const reviewsDiv = document.getElementById("reviews");
    const input = document.getElementById("review");
    const review = input.value;
    input.value = "";
    const reviewElement = document.createElement("li");
    reviewElement.textContent = review;
    reviewsDiv.insertBefore(reviewElement, document.getElementById("bottom"));
}