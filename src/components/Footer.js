import React from 'react';
import {
  Toolbar,
  // ToolbarGroup,
  // ToolbarSeparator,
  // ToolbarTitle
} from 'material-ui/Toolbar';

const debug = require('../utils/Debug')('Footer');
const FooterStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default state
    };
  }

  render() {
    debug('render');
    return (
      <div className="Footer">
        <Toolbar
          muiTheme={this.props.muiTheme}
          style={FooterStyle}
        />
      </div>
    );
  }
}
