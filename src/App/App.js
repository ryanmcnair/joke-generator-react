import React from 'react';
import './App.scss';
import jokeData from '../Helpers/data';
import SetUp from '../components/setup/setup';
import Punchline from '../components/punchline/punchline';

class App extends React.Component {
  state = {
    jokes: {},
    jokeButton: true,
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

  updateJokeButton = () => {
    this.setState({
      jokeButton: false,
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
    const { showSetup, showPunchline, jokeButton } = this.state;
    return (
      <div className="App">
        <div id='container' className="">
          <img src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
          alt='header'/><br></br>
          {jokeButton ? (
          <>
          <button className="btn btn-outline-dark btn-lg" onClick={() => { this.updateSetup(); this.updateJokeButton(); }}>GET A JOKE</button>
          </>) : (
          <>
          <div></div>
          </>
          )}
          {showSetup ? (
          <>
          <SetUp setup={this.state.jokes.setup} />
          <button className="btn btn-outline-dark btn-lg" onClick={() => { this.updatePunchline(); this.updateSetup(); }}>GET PUNCHLINE</button>
          </>
          ) : (
          <>
          <div></div>
          </>
          )}
          {showPunchline ? (
          <>
          <SetUp setup={this.state.jokes.setup} />
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
