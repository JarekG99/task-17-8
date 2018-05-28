import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import { newGame, resetGame, checkGame, showSolution } from '../../actions';

import  './header.css';

const styles = {
  green: {
    color: 'green',
    fontSize: '2.0vw',
    borderRadius: '100px'
  },
  black: {
    color: 'black',
    fontSize: '1.7vw',
    borderRadius: '10px'
  },
};

const Header = (props)  => { console.log('header props', props);


    return (
      <header className="App-header">
          <div className='header-left'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
        <div className='header-middle'>
          <h1 className="App-title">Sudoku</h1>
          <div>
            <button className='btn newgame' style={styles.green} onClick={()=>
              alert('The game rules are simple:\n   1.choose the level by clicking the button below. \n   2.feel the empty tiles with single number (1-9).\n\n Follow the game rules:\n   a.one digit can apear only once in the column and row the tile belongs too.\n   b.The same rule - single number can apear once in the block the tile belongs too (square 3x3).\n\n Feel free to use all buttons provided.\n If all numbers disapear your path was wrong.\n Try to get back by "undo" or "reset" buttons.\n Or start the new game.\n\nGood luck!!!')}>The game rules & description.</button>
          </div>
          <div className='gamelevel'>
              <button className='btn' onClick={props.onEasyClick}>Easy</button>
              <button className='btn' onClick={props.onMediumClick}>Medium</button>
              <button className='btn' onClick={props.onHardClick}>Hard</button>
              <button className='btn' onClick={props.onVeryHardClick}>Very Hard</button>

          </div>
        </div>
        <div className='header-right'>
          <div><button className='btn controls' style={styles.black} onClick={props.onReset}>Reset</button></div>
          <div><button className='btn controls' style={styles.black} onClick={props.onCheck}>Check</button></div>
          <div><button className='btn controls' style={styles.black} onClick={props.onSolve}>Solution</button></div>
        </div>
      </header>
    );
  }


  const mapDispatchToProps = (dispatch) => {
    return {
      onEasyClick: () =>  {dispatch({type: 'NEW_GAME', level: 'easy'})},
      onMediumClick: () =>  {dispatch(newGame('medium'))},
      onHardClick: () =>  {dispatch({type: 'NEW_GAME', level: 'hard'})},
      onVeryHardClick: () =>  {dispatch(newGame('very-hard'))},
      onReset: () =>  {dispatch(resetGame())},
      onCheck: () =>  {dispatch(checkGame())},
      onSolve: () =>  {dispatch(showSolution())}

    }

  }

  const mapStateToProps = (state) => {
    return state;
  }

 // export default connect(null, mapDispatchToProps)(Header);
 export default connect(mapStateToProps, mapDispatchToProps)(Header);
 // export default Header;
