import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState(null)
  const [factError, setFactError] = useState()
  const [imageError, setImageError] = useState()

  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)

      if (!res.ok) setFactError('No se ha podido recuperar la cita')

      const data = await res.json()

      const { fact } = data

      setFact(fact)
    }

    getRandomFact()
  }, [])

  useEffect(() => {
    if (!fact) return

    async function getImageByWords () {
      const threeFirstWords = fact.split(' ', 3).join(' ')

      const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}`)

      if (!res.ok) setImageError('No se ha podido recuperar la imagen')

      const { url } = res

      setImageUrl(url)
    }

    getImageByWords()
  }, [fact])

  return (
    <main >
        <h1>App de gatitos</h1>
        {factError ? <p>{factError}</p> : <p>{fact}</p>}

        {imageError ? <p>{imageError}</p> : <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
