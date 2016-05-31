import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { teal500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const debug = require('../utils/Debug')('AppContainer');

const muiTheme = getMuiTheme({
  palette: {
    textColor: teal500,
  },
  appBar: {
    height: 50,
  },
});

export default class AppContainer extends React.Component {
  render() {
    debug('render');
    return (
      <div className ="AppContainer">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Header muiTheme={muiTheme} />
        </MuiThemeProvider>
        <Body />
        <MuiThemeProvider muiTheme={muiTheme}>
          <Footer muiTheme={muiTheme} />
        </MuiThemeProvider>
      </div>
    );
  }
}
