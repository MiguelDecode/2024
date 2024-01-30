"use strict";
const createTweet = () => {
    const id = crypto.randomUUID();
    const message = "";
    return {
        id,
        message,
    };
};
const createNewThreat = () => {
    const id = crypto.randomUUID();
    const tweets = [createTweet()];
    return {
        id,
        tweets,
    };
};
// Event Listeners
const btnNewTweet = document.getElementById("btn-new");
if (btnNewTweet && btnNewTweet instanceof HTMLButtonElement) {
    btnNewTweet.addEventListener("click", createNewThreat);
}
