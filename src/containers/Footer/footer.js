import React from 'react';
import  './footer.css';


export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.onShowCandidates=this.onShowCandidates.bind(this);
  }

  render() {
    return (
      <footer className='App-footer'>
        <div className='footer-top'>
        <button className='btn'>Undo</button>
        <button className='btn' onClick={this.onShow_Candidates}>Show candidates</button>
        <button className='btn'>Redo</button>
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
}
