  import React from 'react';
  // import { connect } from 'react-redux'
  import PropTypes from 'prop-types';
  import Tile from './Tile';
  import  '../App.css';


  const Board = (props) => {


    let board = [];
    for (let i = 0; i < 81; i++) {
      board.push(<Tile
       id={i}
     />)
    }

     return (
       <div className='board'>{board.map(tile =>
         <Tile
           className='tile'
           key={tile.uuid}
           tile={tile}
           onClick={props.handleClick}
           value={props.handleValue}
         />
       )}
       </div>
     );
  };
    Board.propTypes = {
      board: PropTypes.array,
      onClick: PropTypes.func,

    };


  export default Board;

//   const mapStateToProps = state => {
//     return {
//       board: Board
//     }
//   }
//
// export default connect(null, mapStateToProps)(Board);
