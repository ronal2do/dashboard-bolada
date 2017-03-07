import React, { Component } from 'react';
import { css } from 'glamor';

const Cont = css({
  width: 'calc( 100vw - (330 + 218))',
})

const h1 = css({
  opacity: '0.37',
  fontFamily: 'OpenSans-Extrabold',
  fontSize: '36px',
  color: 'rgba(117,137,182,0.73)',
  letterSpacing: '0',
})

class Page extends Component {
  render() {
    return (
      <div className={Cont}>
        Page
        <h1 className={h1}>Lorem Dolem ipsum site amet</h1>
      </div>
    );
  }
}

export default Page;
