import React, { Component } from 'react';

class Setup extends Component {
  render() {
    const { setup } = this.props;
    return (
      <h4 className="Setup">
        {setup}
      </h4>
    );
  }
}

export default Setup;
