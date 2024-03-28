// const getImgPromise = () =>
//   new Promise((resolve, reject) => {
//     "https://ahsuaht.com";
//   });

// getImgPromise().then(console.log);

const getImage = async () => {
  const apiKey = "";

  const endPoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

  try {
    const res = await fetch(endPoint);

    if (!res.ok) throw new Error("No se ha logrado llevar a cabo la petición.");

    const data = await res.json();

    const { url } = data.data?.images?.original;

    const image = document.createElement("img");
    image.src = url;
    document.body.append(image);
  } catch (error) {
    console.error(error);
  }
};

getImage();
