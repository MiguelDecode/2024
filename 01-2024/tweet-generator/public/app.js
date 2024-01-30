"use strict";
// Se recomienda comenzar a definir algunos de los tipos de datos que se van a usar
// Create a new object Tweet
const createTweet = () => {
    const id = crypto.randomUUID();
    const message = "";
    return {
        id,
        message,
    };
};
// Crea el tweet base del que partiran el resto de tweets o comentarios
function createMainTweet() {
    const id = crypto.randomUUID();
    const tweet = createTweet();
    return {
        id,
        tweets: [tweet],
    };
}
const updateTweet = (tweetThreat, tweet, value) => {
    let newTweet = null;
    // Cycle of the tweets of a threat
    for (let i = 0; i < tweetThreat.tweets.length; i++) {
        const data = tweetThreat.tweets[i];
        if (data.id === tweet.id)
            newTweet = data;
        if (newTweet)
            newTweet.message = value;
    }
};
const renderTweet = (tweetView, view, tweet, last) => {
    // Create a container for a specific thread
    const tweetContainer = document.createElement("div");
    tweetContainer.id = "container-" + tweet.id;
    tweetContainer.classList.add("tweetContainer");
    const form = document.createElement("form");
    form.id = "form-" + tweet.id;
    tweetContainer.appendChild(form);
    // Create a counter for the characters of the textarea
    const countContainer = document.createElement("div");
    countContainer.classList.add("count-container");
    const textarea = document.createElement("textarea");
    textarea.id = "textarea-" + tweet.id;
    textarea.value = tweet.message;
    textarea.maxLength = 250;
    countContainer.textContent = textarea.value.length.toString() + "/250";
    // Create a button for add a new tweet to the thread
    const buttonAddMore = document.createElement("button");
    buttonAddMore.classList.add("btn", "btn--new");
    buttonAddMore.value = "Add Another Tweet";
    buttonAddMore.append(document.createTextNode("Add Another tweet"));
    // Event Listener of button new tweet of the thread
    buttonAddMore.addEventListener("click", (event) => {
        event.preventDefault();
        const anotherTweet = createTweet();
        tweetView.tweets.push(anotherTweet);
        renderView(tweetView);
    });
    // Event Listener of textarea
    textarea.addEventListener("input", (event) => {
        const value = event.target.value;
        countContainer.textContent = value.length.toString() + "/250";
        updateTweet(tweetView, tweet, value);
    });
    form.append(textarea, countContainer);
    // Add a button Add More at the last tweet of the thread
    if (last)
        form.appendChild(buttonAddMore);
    view.appendChild(tweetContainer);
};
function renderView(tweetView) {
    var _a;
    let view = document.querySelector("#container-" + tweetView.id);
    if (view) {
        view.innerHTML = "";
    }
    else {
        view = document.createElement("div");
        view.id = "container-" + tweetView.id;
        view.classList.add("mainContainer");
        (_a = document.querySelector("#tweets")) === null || _a === void 0 ? void 0 : _a.append(view);
    }
    // Check if view exist and it's a DivElement
    if (view && view instanceof HTMLDivElement) {
        for (let i = 0; i < tweetView.tweets.length; i++) {
            renderTweet(tweetView, view, tweetView.tweets[i], i === tweetView.tweets.length - 1 // Return true if it's the last element of the array
            );
        }
    }
}
// Event Listener of new tweet
const buttonNewTweet = document.querySelector("#btn-new");
// Check in execution time if exist and if it's the correct tipe of HTML Element
if (buttonNewTweet && buttonNewTweet instanceof HTMLButtonElement) {
    buttonNewTweet.addEventListener("click", (event) => {
        const newTweetView = createMainTweet();
        renderView(newTweetView);
    });
}
