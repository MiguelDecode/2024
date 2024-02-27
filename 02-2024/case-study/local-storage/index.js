// Storage Data
// localStorage.setItem(key, value);

// Read Data
// localStorage.getItem(key); // value | null

// Remove key
// localStorage.removeItem(key);

// Remove all keys for current domain
// localStorage.clear();

const userNameText = document.querySelector(".userName");
const userAgeText = document.querySelector(".userAge");

const userNameInput = document.querySelector(".name");
const userAgeInput = document.querySelector(".age");

const saveNameButton = document.querySelector(".saveNameBtn");
const saveAgeButton = document.querySelector(".saveAgeBtn");

const saveName = () => {
  const key = userNameInput.name;
  const value = userNameInput.value;

  userNameText.textContent = value;

  localStorage.setItem(key, value);
};

const saveAge = () => {
  const key = userAgeInput.name;
  const value = userAgeInput.value;

  userAgeText.textContent = value;

  localStorage.setItem(key, value);
};

const writeData = () => {
  userNameText.textContent =
    localStorage.getItem("name") || "No name data in local storage";
  userAgeText.textContent =
    localStorage.getItem("age") || "No age data in local storage";
};

saveNameButton.addEventListener("click", saveName);
saveAgeButton.addEventListener("click", saveAge);

document.addEventListener("DOMContentLoaded", writeData);
