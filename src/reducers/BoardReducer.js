import { NEW_GAME, RESET_GAME, CHECK_GAME, NEXT_STEP, SHOW_SOLUTION,
  SHOW_CANDIDATES} from '../actions';
import sudoku from 'sudoku-umd';


const initialState = {
 initialBoard: '',
 board: [],
}

const replaceAt = (index, value) => {
  return (this.substr(0, index) + value + this.substr(index));
}

const BoardReducer = (state=initialState, action) => { console.log('action', action);

  switch (action.type) {

    case NEW_GAME:
      const startBoard = sudoku.generate('level');
      return Object.assign({}, state, {initialBoard: startBoard, board: startBoard.split('')});

    case RESET_GAME:
      return Object.assign({}, state, {board: state.initialBoard.split('')});

    case NEXT_STEP:
          return Object.assign({}, state, {board: replaceAt(action.key, action.value).split('')});

    case SHOW_CANDIDATES:
          const candidatesTile = sudoku.get_candidates(initialState.board).charAt(action.key);
          return Object.assign({}, state, {board: replaceAt(action.key, candidatesTile).split('')});

    case CHECK_GAME:
        const solutionBoard = sudoku.solve(initialState.initialBoard);
        if(solutionBoard.charAt(action.key !== initialState.board.charAt(action.key))) {
          alert('Your proposal is wrong!')
        } else alert('Your proposal is right!');
        break;

    case SHOW_SOLUTION:
       return Object.assign({}, state, {board: sudoku.solve(state.initialBoard).split('')});

    default:
      return state;
  }
};

console.log(BoardReducer.board);

export default BoardReducer;
