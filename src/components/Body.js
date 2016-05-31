import React from 'react';

const debug = require('../utils/Debug')('Body');

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // deafult state
    };
  }

  render() {
    debug('render');
    return (
      <div className="Body">
      </div>
    );
  }
}
