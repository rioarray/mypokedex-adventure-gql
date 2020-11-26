import React from 'react';
import { useQuery } from '@apollo/client';
import { PokemonsData } from 'interfaces/pokemon-list';
import { GET_POKEMON_LIST } from 'graphql-query/pokemon-list';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Loader } from 'semantic-ui-react';
import { Pagelimit } from 'helpers';
import { CardPokemonInformation } from 'components/organisms';

export const PokemonList = () => {
  const { data, fetchMore } = useQuery<PokemonsData>(GET_POKEMON_LIST, {
    variables: { start: Pagelimit },
  });

  const fetchPokemonList = () => {
    fetchMore({
      variables: {
        start:
          data && data.pokemons ? data.pokemons.length + Pagelimit : Pagelimit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons],
        });
      },
    });
  };

  return (
    <div className="pokemon-list ui container">
      <InfiniteScroll
        dataLength={data && data.pokemons ? data.pokemons.length : 0}
        next={fetchPokemonList}
        hasMore={true}
        loader={
          <Loader active inline="centered">
            Loading...
          </Loader>
        }
        style={{ height: 'unset', overflow: 'unset' }}
      >
        <Card.Group itemsPerRow={4} stackable doubling>
          {data &&
            data.pokemons.map((item) => (
              <CardPokemonInformation key={item.id} item={item} />
            ))}
        </Card.Group>
      </InfiniteScroll>
    </div>
  );
};

export default PokemonList;
