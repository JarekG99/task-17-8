import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import { newGame, resetGame, checkGame, showSolution } from '../../actions';

import  './header.css';

const Header = (props)  => {

    return (
      <header className="App-header">
          <div className='header-left'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
        <div className='header-middle'>
          <h1 className="App-title">Sudoku</h1>
          <div>
            <button className='btn newgame' onClick={()=>alert('Choose the level by clicking the button, pls!')}>New game</button>
          </div>
          <div className='gamelevel'>
              <button className='btn' onClick={props.onEasyClick}>Easy</button>
              <button className='btn' onClick={props.onMediumClick}>Medium</button>
              <button className='btn' onClick={props.onHardClick}>Hard</button>
              <button className='btn' onClick={props.onVeryHardClick}>Very Hard</button>

          </div>
        </div>
        <div className='header-right'>
          <div><button className='btn controls' onClick={props.onReset}>Reset</button></div>
          <div><button className='btn controls' onClick={props.onCheck}>Check</button></div>
          <div><button className='btn controls' onClick={props.onSolve}>Solution</button></div>
        </div>
      </header>
    );
  }


  const mapDispatchToProps = (dispatch) => {
    return {
      onEasyClick: () =>  {dispatch({type: 'NEW_GAME', level: 'easy'})},
      onMediumClick: () =>  {dispatch(newGame('medium'))},
      onHardClick: () =>  {dispatch({type: 'NEW_GAME', level: 'hard'})},
      onVeryHardClick: () =>  {dispatch(newGame('very_hard'))},
      onReset: () =>  {dispatch(resetGame())},
      onCheck: () =>  {dispatch(checkGame())},
      onSolve: () =>  {dispatch(showSolution())}

    }
    // bindActionCreators(Actions, dispatch)
  }


 export default connect(null, mapDispatchToProps)(Header);
 // export default Header;
