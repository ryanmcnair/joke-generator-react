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

  updateSetup = () => {
    this.setState({
      showSetup: !this.state.showSetup,
    });
  }

  updatePunchline = () => {
    this.setState({
      showPunchline: !this.state.showPunchline,
    });
  }

  render() {
    const { showSetup, showPunchline } = this.state;
    return (
      <div className="App">
        <div id='container' className="container">
          <img src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
          alt='header'/><br></br>
          <button className="btn btn-outline-dark btn-lg" onClick={this.updateSetup}>GET A JOKE</button>
          {showSetup ? (
          <>
          <SetUp setup={this.state.jokes.setup} />
          <button className="btn btn-outline-dark btn-lg" onClick={this.updatePunchline}>GET PUNCHLINE</button>
          </>
          ) : (
          <>
          <div></div>
          </>
          )}
          {showPunchline ? (
          <>
          <Punchline punchline={this.state.jokes.punchline} />
          <button className="btn btn-outline-dark btn-lg" onClick={() => window.location.reload(false)}>GET A NEW JOKE</button>
          </>) : (
          <>
          <div></div>
          </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
