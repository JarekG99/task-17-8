import React from 'react';
import { connect } from 'react-redux';
import { showCandidates } from '../../actions';

import  './footer.css';


const Footer = (props)  => { console.log('footer props', props);

    return (
      <footer className='App-footer'>
        <div className='footer-top'>
        {/* <button className='btn' onClick={onUndo} disabled={!canUndo}>Undo</button> */}
        <button className='btn' onClick={this.onShow_Candidates}>Show candidates</button>
        {/* <button className='btn' onClick={onRedo} disabled={!canRedo}>Redo</button> */}
        </div>
        <div className='footer-bottom'>
        <button className='btn number'>0</button>
        <button className='btn number'>1</button>
        <button className='btn number'>2</button>
        <button className='btn number'>3</button>
        <button className='btn number'>4</button>
        <button className='btn number'>5</button>
        <button className='btn number'>6</button>
        <button className='btn number'>7</button>
        <button className='btn number'>8</button>
        <button className='btn number'>9</button>
        </div>
      </footer>
    );
  }


const mapDispatchToProps = (dispatch) => {
  return {
    // onUndo: () => dispatch(UndoActionCreators.undo()),
    // onRedo: () => dispatch(UndoActionCreators.redo()),
    onShow_Candidates: () =>  {dispatch(showCandidates())}

  }

}

const mapStateToProps = (state) => {
  return {
  state,
  // canUndo: state.todos.past.length > 0,
  // canRedo: state.todos.future.length > 0
}
}
// export default connect(null, mapDispatchToProps)(Header);
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
