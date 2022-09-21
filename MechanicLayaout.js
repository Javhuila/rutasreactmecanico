import React, { Fragment } from 'react';
import PresenSeven from './PresenSeven';
import NavbarFrist from './NavbarFrist';
import NavbarSecond from './NavbarSecond';
import PresenEight from './PresenEight';
import PresenFive from './PresenFive';
import PresenOne from './PresenOne';
import PresenSix from './PresenSix';
import PresenTwo from './PresenTwo';
import Vehi from './Vehi';

function MechanicLayaout() {
  return (
    <Fragment>
      <div className='fondo002'>
        <NavbarFrist />
        <NavbarSecond />
        <PresenOne />
        <Vehi />
        <PresenTwo />
        <PresenFive />
        <PresenSix />
        <PresenSeven />
        <PresenEight />
      </div>
    </Fragment>
  )
}

export default MechanicLayaout
