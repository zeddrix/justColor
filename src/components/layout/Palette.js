import React, { Fragment } from 'react';
import ArbitraryBtn from '../colorBtns/ArbitraryBtn';
import ColorBtns from '../colorBtns/ColorBtns';
import AppendBtn from '../colorBtns/AppendBtn';

const Palette = () => {
  return (
    <Fragment>
      <div className="palette">
        <ArbitraryBtn />
        <AppendBtn />
        <ColorBtns />
      </div>
    </Fragment>
  )
}

export default Palette;
