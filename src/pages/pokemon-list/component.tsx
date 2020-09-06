import React from 'react';
import { useQuery } from '@apollo/client';
import { PokemonsData } from 'interfaces/pokemon-list';
import { GET_POKEMON_LIST } from 'graphql-query/pokemon-list';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Image, Loader } from 'semantic-ui-react';
import { Pagelimit, PokemonTypes } from 'helpers';
import { ElementColumn } from 'components/molecules';
import { ElementLabel, SegmentLabel, TagLabel } from 'components/atoms';

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
  const colorPokemonType = (value: string) => PokemonTypes(value.toLowerCase());

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
              <Card key={item.id} link>
                <SegmentLabel color="blue" value={item.number} />
                <Image src={item.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Meta>{item.classification}</Card.Meta>
                  <Card.Description>
                    {item.types.map((type: string, index: number) => (
                      <TagLabel
                        key={index}
                        className="ui label"
                        style={{
                          backgroundColor: colorPokemonType(type),
                          borderColor: colorPokemonType(type),
                          color: '#FFF',
                        }}
                        value={type}
                      />
                    ))}
                    <div className="ui stackable two column grid">
                      <ElementColumn>
                        <>
                          <ElementLabel className="font-weight-700">
                            Max HP
                          </ElementLabel>
                          <ElementLabel>{item.maxHP}</ElementLabel>
                        </>
                      </ElementColumn>
                      <ElementColumn>
                        <>
                          <ElementLabel className="font-weight-700">
                            Max CP
                          </ElementLabel>
                          <ElementLabel>{item.maxCP}</ElementLabel>
                        </>
                      </ElementColumn>
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </InfiniteScroll>
    </div>
  );
};

export default PokemonList;
