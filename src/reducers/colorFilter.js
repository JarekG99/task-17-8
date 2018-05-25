import { ColorFilters } from '../actions';

const colorFilter = (state = ColorFilters.RED, action) => {
  switch (action.type) {
    case 'RED':
      return {style: {color: '#f00'}}
    case 'GREEN':
      return {style: {color:'#2e7748'}}
    case 'BLACK':
      return {style: {color: '#000'}}
    default:
      return state;
  }
}

export default colorFilter;
