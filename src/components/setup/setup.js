import React, { Component } from 'react';

class Setup extends Component {
  render() {
    const { setup } = this.props;
    return (
      <p className="Setup">
        {setup}
      </p>
    );
  }
}

export default Setup;
