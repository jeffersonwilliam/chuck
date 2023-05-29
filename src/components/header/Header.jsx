import React from 'react';
import chuck from '../../assets/chuck.png';
import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-contents'>
        <img src={chuck} className='chuck-logo' alt='' />
        <h1 className='chuck-title'>Chuck Got Jokes</h1>
      </div>
    </div>
  );
};

export default Header;
