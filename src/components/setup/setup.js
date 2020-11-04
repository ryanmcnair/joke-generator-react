import React, { Component } from 'react';
import jokeData from '../../Helpers/data';
import Punchline from '../punchline/punchline';

class SetUp extends Component {
  state = {
    joke: [],
  };

  getAJoke = () => {
    jokeData.getJokes().then((response) => {
      this.setState({
        joke: response,
      });
    });
  };

  render() {
    const { joke } = this.state;
    const punchline = () => <Punchline key={joke.id} joke={joke} />;
    return (
      <>
        <button
          type="button"
          id="giveMeAJoke"
          className="btn btn-info btn-lg mainButton"
          onClick={this.getAJoke}
        >
          Get a Joke
        </button>
        {this.state.joke.id ? <div>{punchline()}</div> : <></>}
      </>
    );
  }
}

export default SetUp;
