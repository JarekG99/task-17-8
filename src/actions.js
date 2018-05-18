export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';
export const CHECK_GAME = 'CHECK_GAME';
export const NEXT_STEP = 'NEXT_STEP';
export const SHOW_SOLUTION = 'SHOW_SOLUTION';
export const SHOW_CANDIDATES = 'SHOW_CANDIDATES';
export const CHOOSE_LEVEL = 'CHOOSE_LEVEL';
export const CHOOSE_NUMBER = 'CHOOSE_NUMBER';

export function newGame(level)  {
  return {
        type: 'NEW_GAME',
        level: level,
    };
  }

export const resetGame = () => ({
        type: 'RESET_GAME'
})

export const checkGame = (key) => ({
        type: 'CHECK_GAME'
})

export const nextStep = (value, key) => ({
        type: 'NEXT_STEP',
        value,
        key,
})

export const showSolution = () => ({
        type: 'SHOW_SOLUTION'
})

export const showCandidates = (key) => ({
        type: 'SHOW_CANDIDATES',
        key,
})

export const chooseNumber = () => ({
        type: 'CHOOSE_NUMBER'
})
export const ColorFilters =  {
  RED: 'RED',
  GREEN: 'GREEN',
  BLACK: 'BLACK'
}

// export function undoStep() {
//     return {
//         type: UNDO_STEP
//     }
// }
//
// export function redoStep() {
//     return {
//         type: REDO_STEP
//     }
// }
