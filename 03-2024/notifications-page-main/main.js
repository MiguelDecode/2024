const postElements = document.querySelectorAll(".post");
const postElement = document.querySelector(".post");
const btnMarkAll = document.getElementById("mark-all");
const unreadElement = document.getElementById("unread-posts");

// Function to simulate unread comment by click
document.addEventListener("click", (event) => {
  if (event.target.matches(".post *")) {
    const currentPost = event.target.closest(".post");

    const statusElement = currentPost.querySelector(".status");

    statusElement.classList.toggle("not-read");
  }

  unreadCheck();
});

// Mark all the comments as read
btnMarkAll.addEventListener("click", (event) => {
  postElements.forEach((post) => {
    post.querySelector(".status").classList.remove("not-read");
  });

  unreadCheck();
});

// Check total unread posts
function unreadCheck() {
  let unread = 0;
  postElements.forEach((post) => {
    if (post.querySelector(".not-read")) unread++;
  });

  unreadElement.textContent = unread;
}

unreadCheck();
