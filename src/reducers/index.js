import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';
import colorFilter from './colorFilter';


export default combineReducers({
  BoardReducer,
  colorFilter
})
