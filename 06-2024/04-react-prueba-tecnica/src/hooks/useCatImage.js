import { useEffect, useState } from 'react'
import { getImageByWords } from '../services/getImageByWords'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageError, setImageError] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3)

    getImageByWords(threeFirstWords).then(({ url, err }) => {
      setImageUrl(url)
      setImageError(err)
    })
  }, [fact])

  return { imageUrl, imageError }
}
