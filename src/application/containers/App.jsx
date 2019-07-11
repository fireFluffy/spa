// @flow
import { hot } from 'react-hot-loader';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TableContainer from './Page';

class App extends PureComponent<null, null> {
  render() {
    return (
      <Router>
        <TableContainer />
      </Router>
    );
  }
}

export default hot(module)(App);
