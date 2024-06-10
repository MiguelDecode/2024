export async function getImageByWords(arr) {
  const words = arr.join(" ");

  const res = await fetch(`https://cataas.com/cat/says/${words}`);

  let err;

  if (!res.ok) err = "No se ha podido recuperar la imagen";

  const { url } = res;

  return { url, err };
}
