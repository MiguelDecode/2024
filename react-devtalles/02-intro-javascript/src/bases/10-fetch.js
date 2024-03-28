const apiKey = "";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const getRandomGif = fetch(url)
  .then((res) =>
    res.ok ? res.json() : Promise.reject("La petición no se ha logrado")
  )
  .then((json) => {
    const { url } = json.data?.images?.original;
    const image = document.createElement("img");
    image.src = url;
    document.body.append(image);
  })
  .catch((err) => console.warn(err));
