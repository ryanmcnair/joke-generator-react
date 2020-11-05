import React from 'react';
import './App.scss';
import jokeData from '../Helpers/data';
import SetUp from '../components/setup/setup';
import Punchline from '../components/punchline/punchline';

class App extends React.Component {
  state = {
    jokes: {},
    showSetup: false,
    showPunchline: false,
  }

  componentDidMount() {
    jokeData.getJokes().then((resp) => {
      this.setState({
        jokes: resp,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div id='container' className="container">
          <img src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
          alt='header'/>
          <SetUp setup={this.state.jokes.setup} />
          <Punchline punchline={this.state.jokes.punchline} />
        </div>
      </div>
    );
  }
}

export default App;
