import { NEW_GAME, RESET_GAME, CHECK_GAME, NEXT_STEP, SHOW_SOLUTION,
  SHOW_CANDIDATES} from '../actions';
import sudoku from 'sudoku-umd';



const initialState = {
 initialBoard: '',
 board: [],
}

const replaceAt = (state, index, value) => { console.log('index, value', index, value);
  // return (this.substr(0, index) + value + this.substr(index));
  state.board[index] = value;
  return state.board;
}

const BoardReducer = (state=initialState, action) => { console.log('action', action, action.key);

  switch (action.type) {

    case NEW_GAME:
      const startBoard = sudoku.generate(action.level);
      return Object.assign({}, state, {initialBoard: startBoard, board: startBoard.split('')});

    case RESET_GAME:
      return Object.assign({}, state, {board: state.initialBoard.split('')});

    case NEXT_STEP:
          return Object.assign({}, state, {board: replaceAt(state, action.key, action.value)});

    case SHOW_CANDIDATES:
          const candidatesTile = sudoku.get_candidates(state.initialBoard).toString().split(',');
          console.log(candidatesTile);
          return Object.assign({}, state, {board: candidatesTile});

    case CHECK_GAME: {
        const solutionBoard = sudoku.solve(state.initialBoard).split('');
        let i=0;
        solutionBoard.map(function(item,index){solutionBoard[index] === state.board[index] ?
        i : (state.board[index]==='.' ? i : i++)});
        // if(solutionBoard[action.key] !== state.board[action.key]) {
        if(i===0) {
          alert('Your proposal is right! Go ahead!');
        } else { alert('Your proposal is wrong! You have ' +  i + ' mistake(s)');
      }
       // console.log('i', i, solutionBoard);
     }
        return state;

    case SHOW_SOLUTION:
       return Object.assign({}, state, {board: (sudoku.solve(state.initialBoard)).split('')});

    default:
      return state;
  }
};

console.log(BoardReducer.board);

export default BoardReducer;
