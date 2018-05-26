import React from 'react'
import { connect } from 'react-redux'
import { store } from '../index';
import Board from '../components/board';
import { nextStep } from '../actions';

export class ShowBoardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialBoard: '',
      board: [],
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
    const  id  = event.target.id;
    console.log(id);
      // style= {
      //    backgroundColor: ['#FFF']}
    };

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    let value = e.target.value;
    let id = e.target.id;
  }

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
  onfinishEdit: (value, id) => dispatch(nextStep(value, id)),
  ShowBoardPage,
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(ShowBoardPage)
