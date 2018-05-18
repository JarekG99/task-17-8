import React from 'react';
import  ShowBoardPage  from './containers/ShowBoardPage';
import  Header  from './containers/Header/header';
import { Footer } from './containers/Footer/footer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='App-main'>
          <ShowBoardPage />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
