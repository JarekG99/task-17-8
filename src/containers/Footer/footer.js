import React from 'react';
import { connect } from 'react-redux';
import { showCandidates } from '../../actions';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import  './footer.css';

const styles = {
  green: {
    color: 'green',
    fontSize: '1.5vw',
    borderRadius: '100px'
  },
  blue: {
    color: 'blue',
    fontSize: '1.5vw',
    borderRadius: '10px'
  },
};

const Footer = ({props, onShow_Candidates, canUndo, canRedo, highlighted,
  onUndo, onRedo,  })  => {

    return (
      <footer className='App-footer'>
        <div className='footer-top'>
        <button className='btn' style={styles.blue} onClick={onUndo} disabled={!canUndo}>Undo</button>
        <button className='btn' style={styles.green}
           onClick={onShow_Candidates}>Show candidates</button>
        <button className='btn' style={styles.blue} onClick={onRedo} disabled={!canRedo}>Redo</button>
        </div>
        {/* <div className='footer-bottom'>
        <button className='btn number' onClick={props.on1}>1</button>
        <button className='btn number' onClick={props.on2}>2</button>
        <button className='btn number' onClick={props.on3}>3</button>
        <button className='btn number' onClick={props.on4}>4</button>
        <button className='btn number' onClick={props.on5}>5</button>
        <button className='btn number' onClick={props.on6}>6</button>
        <button className='btn number' onClick={props.on7}>7</button>
        <button className='btn number' onClick={props.on8}>8</button>
        <button className='btn number' onClick={props.on9}>9</button>
        </div> */}
      </footer>
    );
  }


const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
    onShow_Candidates: () =>  {dispatch(showCandidates())},
    // on1: () => {dispatch(chooseNumber(1))},
    // on2: () => {dispatch(chooseNumber(2))},
    // on3: () => {dispatch(chooseNumber(3))},
    // on4: () => {dispatch(chooseNumber(4))},
    // on5: () => {dispatch(chooseNumber(5))},
    // on6: () => {dispatch(chooseNumber(6))},
    // on7: () => {dispatch(chooseNumber(7))},
    // on8: () => {dispatch(chooseNumber(8))},
    // on9: () => {dispatch(chooseNumber(9))},
  }

}

const mapStateToProps = (state) => {
  return {
  state,
  canUndo: state.BoardReducer.past.length > 0,
  canRedo: state.BoardReducer.future.length > 0,

}
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
