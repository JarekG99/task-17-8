import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import uuid from 'uuid';
import  '../App.css';
import { nextStep, checkGame } from '../actions';


const Tile = ({onChange, number, id, locked, onfinishEdit, onhandleChange}) => {
 // console.log('number', number);

this.handleChange = (event) => {
  const value = event.target.value
  onfinishEdit(value, id);
 }

 return (
    <input
      onChange={this.handleChange}
      className={'tile' + (locked ? ' disabled' : '')}
      type='number'
      id = {uuid()}
      value={number}
      disabled={locked ? 'disabled' : ''}

    />
  );

}

  Tile.propTypes = {
    input: PropTypes.number,
    onChange: PropTypes.func,
  }

const mapDispatchToProps = (dispatch) => {
  return {
   value: Tile.value,
   onhandleChange: (value, id) => dispatch(checkGame(value, id)),
   onfinishEdit: (value, id) => dispatch(nextStep(value, id)),
 }
}


export default connect(null, mapDispatchToProps)(Tile);
