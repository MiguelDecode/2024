export const getGifs = async (category) => {
  const APIKEY = "";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${category}&limit=4`;

  const res = await fetch(url);

  if (!res.ok) return;

  const { data = [] } = await res.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
