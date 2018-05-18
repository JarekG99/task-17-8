import { ColorFilters } from '../actions';

const colorFilter = (state = ColorFilters.RED, action) => {
  switch (action.type) {
    case 'GREEN':
      return {style: {color: 'green'}}
    case 'BLACK':
      return {style: {color: 'black'}}
    default:
      return state;
  }
}

export default colorFilter;
