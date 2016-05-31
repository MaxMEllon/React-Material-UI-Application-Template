import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const debug = require('../utils/Debug')('Header');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default state
    };
  }

  onClick = () => {
    debug('onClick');
    window.open('', '_self').close();
  }

  render() {
    debug('render');
    return (
      <div className="Header">
        <AppBar
          iconElementLeft={
            <IconButton onClick={this.onClick}>
              <NavigationClose />
            </IconButton>
          }
          muiTheme={this.props.muiTheme}
          title="AppTemplate"
        />
      </div>
    );
  }
}
