export const PokemonTypes = (type: string) => {
  let color: string = '#A8A77A';
  switch (type) {
    case 'fire':
      color = '#EE8130';
      break;
    case 'water':
      color = '#6390F0';
      break;
    case 'grass':
      color = '#7AC74C';
      break;
    case 'electric':
      color = '#F7D02C';
      break;
    case 'psychic':
      color = '#F95587';
      break;
    case 'ice':
      color = '#96D9D6';
      break;
    case 'dragon':
      color = '#6F35FC';
      break;
    case 'dark':
      color = '#705746';
      break;
    case 'fairy':
      color = '#D685AD';
      break;
    case 'normal':
      color = '#A8A77A';
      break;
    case 'fighting':
      color = '#C22E28';
      break;
    case 'flying':
      color = '#A98FF3';
      break;
    case 'poison':
      color = '#A33EA1';
      break;
    case 'ground':
      color = '#E2BF65';
      break;
    case 'rock':
      color = '#B6A136';
      break;
    case 'bug':
      color = '#A6B91A';
      break;
    case 'ghost':
      color = '#735797';
      break;
    case 'steel':
      color = '#B7B7CE';
      break;
  }
  return color;
};
