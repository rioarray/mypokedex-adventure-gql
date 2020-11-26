import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { SegmentLabel, TagLabel } from 'components/atoms';
import { DataGridColumnInformation } from 'components/molecules';
import { Pokemons } from 'interfaces/pokemon-list';
import { PokemonTypes } from 'helpers';

interface IProps {
  item: Pokemons;
}

const colorPokemonType = (value: string) => PokemonTypes(value.toLowerCase());

export const CardPokemonInformation: React.FC<IProps> = ({ item }) => (
  <Card link>
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
        <DataGridColumnInformation maxHp={item.maxHP} maxCp={item.maxCP} />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CardPokemonInformation;
