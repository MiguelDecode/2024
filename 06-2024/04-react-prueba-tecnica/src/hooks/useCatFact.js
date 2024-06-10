import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/getRandomFact'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const [factError, setFactError] = useState()

  const refreshFact = () => {
    getRandomFact().then(({ fact, err }) => {
      setFact(fact)
      setFactError(err)
    })
  }

  useEffect(refreshFact, [])

  return { fact, factError, refreshFact }
}
