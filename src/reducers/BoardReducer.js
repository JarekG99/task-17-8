import { NEW_GAME, RESET_GAME, CHECK_GAME, NEXT_STEP, SHOW_SOLUTION,
  SHOW_CANDIDATES, CHOOSE_NUMBER } from '../actions';
import sudoku from 'sudoku-umd';
import undoable, { distinctState } from 'redux-undo';


const initialState = {
 initialBoard: '',
 board: [],
 showCandidates: [],
}

const replaceAt = (state, index, value) => { console.log('index, value', index, value);
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
          state.showCandidates[action.key] = false;
          return Object.assign({}, state, {board: replaceAt(state, action.key, action.value)});

    case SHOW_CANDIDATES:
          state.board = state.board.map((item, index) => state.showCandidates[index] ? '' : item);
          const candidatesTile = sudoku.get_candidates(state.board).toString().split(',');
          console.log('state.board', state.board);
          return Object.assign({}, state, {board: candidatesTile, showCandidates: candidatesTile.map((item, index) => state.initialBoard[index] !== '.' ? false : true)});


          // const candidatesTile = sudoku.get_candidates(state.board).toString().split(',');
          // // console.log(candidatesTile);
          // return Object.assign({}, state, {board: candidatesTile});

    case CHECK_GAME: {
        const solutionBoard = sudoku.solve(state.initialBoard).split('');
        let i=0;
        solutionBoard.map(function(item,index){solutionBoard[index] === state.board[index] ?
        i : (state.board[index]==='.' ? i : i++)});
        if(i===0) {
          alert('Your proposal is right! Go ahead! ');
        } else { alert('Your proposal is wrong! You have ' +  i + ' mistake(s)');
      }
     }
        return state;

    case SHOW_SOLUTION:
       return Object.assign({}, state, {board: (sudoku.solve(state.initialBoard)).split('')});

    case CHOOSE_NUMBER:

        // return Object.assign({}, state, {board: replaceAt(state, action.key, action.value)});
          return state;

    default:
      return state;
  }
};


const undoableBoard = undoable(BoardReducer, {
  filter: distinctState()
})
export default undoableBoard;
