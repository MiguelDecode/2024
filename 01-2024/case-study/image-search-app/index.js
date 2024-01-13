const searchInputElement = document.getElementById("search-input");
const searchBtn = document.getElementById("search-submit");
const showMoreBtn = document.getElementById("show-more");
const formElement = document.getElementById("form");
const resultsElement = document.getElementById("results");

const ACCESS_KEY = "";
let page = 1;

const createCard = ({ urls, alt_description, links }) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = urls.small;
  cardImage.alt = alt_description;
  cardImage.classList.add("card__image");

  const cardLink = document.createElement("a");
  cardLink.classList.add("card__link");
  cardLink.target = "_blank";
  cardLink.rel = "noopener noreferrer";
  cardLink.textContent = alt_description;
  cardLink.href = links.html;

  cardElement.appendChild(cardImage);
  cardElement.appendChild(cardLink);

  return cardElement;
};

const searchImages = async () => {
  const searchQuery = searchInputElement.value;
  const baseUrl = "https://api.unsplash.com/search/photos/";
  console.log(page);
  const url =
    baseUrl + `?client_id=${ACCESS_KEY}&page=${page}&query=${searchQuery}`;

  try {
    const response = await fetch(url);

    console.log(response);

    if (!response.ok)
      throw new Error({
        status: response.status,
        statusText: response.statusText,
      });

    const json = await response.json();

    console.log(json);
    console.log(json.results);

    const fragment = document.createDocumentFragment();

    json.results.forEach((result) => {
      fragment.appendChild(createCard(result));
    });

    resultsElement.appendChild(fragment);
  } catch (err) {
    console.error(err);
  }

  showMoreBtn.style.display = "inline";
};

const handleShowMore = () => {
  page++;
  searchImages();
};

const handleSubmit = (event) => {
  event.preventDefault();

  searchImages();
};

formElement.addEventListener("submit", handleSubmit);

searchBtn.addEventListener("click", handleSubmit);

showMoreBtn.addEventListener("click", handleShowMore);
