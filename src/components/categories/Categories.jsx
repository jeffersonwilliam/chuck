import React from 'react';
import animal from '../../assets/animal.png';
import career from '../../assets/career.png';
import owl from '../../assets/owl.png';
import fox from '../../assets/fox.png';
import './categories.scss';

const Categories = () => {
  return (
    <div className='categories-container'>
      <h2 id='categories-title'>Categories</h2>
      <div id='categories-row'>
        <div className='category-card'>
          <img src={animal} className='category-image' alt='animal' />
          <h3 className='category-title'>Animal</h3>
        </div>
        <div className='category-card'>
          <img src={career} className='category-image' alt='career' />
          <h3 className='category-title'>Career</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
