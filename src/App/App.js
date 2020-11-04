import React from 'react';
import './App.scss';
import SetUp from '../components/setup/setup';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
          alt='header'/>
          <SetUp />
        </div>
      </div>
    );
  }
}

export default App;
