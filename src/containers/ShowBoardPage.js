import React from 'react'
import { connect } from 'react-redux'
import { store } from '../index';
import Board from '../components/board'

export class ShowBoardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialBoard: '',
      board: [],
      colorFilter: 'RED',
    }

 store.subscribe(() => {
   // console.log(store.getState())
   this.setState({
     board: store.getState().BoardReducer.board,
   })
 });

console.log(store.getState())
}
  handleClick = (event) => {
    const { number, key } = event.target;
    this.setState({
      [number]: number,
      [key]: key,
    });
  };

  handleValue = (item) => {
    this.state.board.map(function(item,index){Board[index].value = (
    (item === '.' || item === undefined) ? '' : store.board[item])}
    )
  };

  render() {
    return (
      <div className='main'>
        <Board />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  board: state.board,
}
}

const mapDispatchToProps = (dispatch) => {
  return {
  ShowBoardPage,
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(ShowBoardPage)
