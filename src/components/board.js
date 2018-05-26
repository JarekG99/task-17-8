  import React from 'react';
  import { connect } from 'react-redux'
  import PropTypes from 'prop-types';
  import Tile from './Tile';
  import  '../App.css';
  import uuid from 'uuid';

  import { store } from '../index';


  const Board = (props) => {
      // let store = store.getState();

// console.log('sore board', store.getState());
// console.log('render board', this.state);
// console.log('props board', props);
//
    let board = [];
    for (let i = 0; i < 81; i++) {
     //  board.push(<Tile
     //   id={i}
     // />)


     board.push(store.getState().BoardReducer.board[i] || '');
    }
console.log('board Arr', board);


     return (
       <div className='board'>{board.map((number, index) =>
         <Tile
           className='tile'
           key={uuid()}
           number={number}
           onClick={props.handleClick}
           value={props.handleValue}
           onKeyPress={this.checkEnter}
           locked={store.getState().BoardReducer.initialBoard[index] !== '.'}
           id={index}
         />
       )}
       </div>
     );
  };
    Board.propTypes = {
      board: PropTypes.array,
      onClick: PropTypes.func,

    };



  const mapStateToProps = (state) => {
    return state;
  }

export default connect(mapStateToProps, null)(Board);
