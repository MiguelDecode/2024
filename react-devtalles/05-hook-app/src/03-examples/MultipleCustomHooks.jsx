import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, addToCounter, substractCounter } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          name={data.name}
          id={data.id}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? substractCounter() : null)}
      >
        Anterior
      </button>

      <button className="btn btn-primary mt-2" onClick={() => addToCounter()}>
        Siguiente
      </button>
    </>
  );
};
