import { useCatImage } from '../hooks/useCatImage'

export const Otro = () => {
  const { imageUrl, imageError } = useCatImage({ fact: 'Random fact' })

  return (
    <>
    {imageError ? <p>{imageError}</p> : <img src={imageUrl} alt="Image base in random fact"/>}
    </>
  )
}
