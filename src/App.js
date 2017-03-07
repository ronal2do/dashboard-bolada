import React, { Component } from 'react';
import { css } from 'glamor';

import Sidebar from './Sidebar';
import Profile from './Profile';
import Page from './Page';

const Main = css({
  display:  'flex',
})

class App extends Component {
  render() {
    return (
      <div className={Main}>
        <Sidebar />
        <Profile />
        <Page />
      </div>
    );
  }
}

export default App;
