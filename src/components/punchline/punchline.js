import React, { Component } from 'react';

class Punchline extends Component {
  render() {
    const { punchline } = this.props;

    return <p className="Punchline">
        {punchline}
        </p>;
  }
}

export default Punchline;
