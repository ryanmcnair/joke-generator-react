import React, { Component } from 'react';

class Punchline extends Component {
  state = {
    punchline: [],
  };

  punchline = () => {
    this.setState({
      punchline: this.props.joke.punchline,
    });
  };

  render() {
    const { joke } = this.props;

    return (
      <div className="card mx-auto">
        <div className="card-body">
          <p className="card-text">{joke.setup}</p>
          <button
            href="#"
            id="punchline"
            onClick={this.punchline}
            className="btn btn-primary"
          >
            Click for Punchline
          </button>
          <div id="punchlineArea" className="punchlineArea">
            <h4 className="m-md">{this.state.punchline}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Punchline;
