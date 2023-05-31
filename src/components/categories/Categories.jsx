import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJoke } from '../../actions';
import animal from '../../assets/animal.png';
import career from '../../assets/career.png';
import owl from '../../assets/owl.png';
import fox from '../../assets/fox.png';
import './categories.scss';

const Categories = () => {
  const dispatch = useDispatch();

  const jokeCreator = (jokecategory) => {
    // console.log('event val', event.value);
    dispatch(fetchJoke(jokecategory));
  };

  return (
    <div className='categories-container'>
      <h2 id='categories-title'>Categories</h2>
      <div id='categories-row'>
        <div onClick={() => jokeCreator('animal')} className='category-card'>
          <img src={animal} className='category-image' alt='animal' />
          <h3 className='category-title'>Animal</h3>
          {/* <button className='joke-btn' onClick={() => jokeCreator('animal')}>
            Generate
          </button> */}
        </div>
        <div onClick={() => jokeCreator('career')} className='category-card'>
          <img src={career} className='category-image' alt='career' />
          <h3 className='category-title'>Career</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
