import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import uuid from 'uuid';
import  '../App.css';


const Tile = ({onChange, number, id}) => {
 // console.log('number', number);


this.handleChange = (event) => {
  const value = event.target.value
 }

 return (
    <input
      onChange={this.handleChange}
      className='tile'
      type='number'
      id = {uuid()}
      defaultValue={number}
    />
  );

}

  Tile.propTypes = {
    input: PropTypes.number,
    onChange: PropTypes.func,
  }

const mapDispatchToProps = (dispatch) => {
  return {
   value: Tile.value
 }
}


export default connect(null, mapDispatchToProps)(Tile);
