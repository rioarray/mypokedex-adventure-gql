export type Pokemons = {
  id: string;
  number: number;
  name: string;
  image: string;
  classification: string;
  types: string[];
  maxHP: number;
  maxCP: number;
};

export type PokemonsData = {
  pokemons: Pokemons[];
};
