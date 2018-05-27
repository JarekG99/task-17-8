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

export const checkGame = (value,key) => ({
        type: 'CHECK_GAME',
        value,
        key,
})

export const nextStep = (value, key) => ({
        type: 'NEXT_STEP',
        value,
        key,
})

export const showSolution = () => ({
        type: 'SHOW_SOLUTION'
})

export const showCandidates = () => ({
        type: 'SHOW_CANDIDATES',

})

export const chooseNumber = (value) => ({
        type: 'CHOOSE_NUMBER'
})
