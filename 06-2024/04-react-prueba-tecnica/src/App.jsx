import './App.css'
import { Otro } from './components/Otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const { fact, factError, refreshFact } = useCatFact()
  const { imageUrl, imageError } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main >
        <h1>App de gatitos</h1>

        <button onClick={handleClick}>Get new fact</button>

        {factError ? <p>{factError}</p> : <p>{fact}</p>}

        {imageError ? <p>{imageError}</p> : <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

        <Otro/>
    </main>
  )
}
