import React, { Component } from 'react';

class Punchline extends Component {
  render() {
    const { punchline } = this.props;
    return <h4 className="Punchline">
        {punchline}
        </h4>;
  }
}

export default Punchline;
