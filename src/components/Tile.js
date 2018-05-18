import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import  '../App.css';


const Tile = ({onChange, number, tile, key}) => {

 return (
    <input
      onChange={onChange}
      className='tile'
      type='number'
      key = {uuid()}
    >
      {number}
    </input>
  );
};

  Tile.propTypes = {
    input: PropTypes.number,
    onChange: PropTypes.func,

  }

export default Tile;
