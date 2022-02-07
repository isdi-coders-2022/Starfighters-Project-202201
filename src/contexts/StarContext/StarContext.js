async function getStarFighters(endpoint) {
  const firstList = await fetch(endpoint);
  const arrayFirstList = await firstList.json();
  const arrayFirstObjects = arrayFirstList.results;
  const arrayFetchedPokemons = arrayFirstObjects.map(async (element) => {
    const pokemonURL = await fetch(element.url);
    const pokemon = await pokemonURL.json();
    return pokemon;
  });
  const pokemonList = await Promise.all(arrayFetchedPokemons);
  return pokemonList;
}

const starFightersFetch = await getStarFighters(
  "https://pokeapi.co/api/v2/pokemon"
);
