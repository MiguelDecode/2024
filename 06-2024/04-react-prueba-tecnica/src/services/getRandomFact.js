const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)

  let err

  if (!res.ok) {
    err = 'No se ha podido recuperar la cita'
  }

  const { fact } = await res.json()

  return { fact, err }
}
