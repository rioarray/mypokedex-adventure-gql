import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query GetGreeting($start: Int!) {
    pokemons(first: $start) {
      id
      number
      name
      image
      classification
      types
      maxHP
      maxCP
    }
  }
`;
