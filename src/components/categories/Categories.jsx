import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJoke } from '../../actions';
import animal from '../../assets/animal.png';
import career from '../../assets/career.png';
import celeb from '../../assets/celeb.png';
import dev from '../../assets/dev.png';
import explicit from '../../assets/explicit.png';
import history from '../../assets/history.png';
import fashion from '../../assets/fashion.png';
import food from '../../assets/food.png';
import money from '../../assets/money.png'
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
        </div>
        <div onClick={() => jokeCreator('career')} className='category-card'>
          <img src={career} className='category-image' alt='career' />
          <h3 className='category-title'>Career</h3>
        </div>
        <div onClick={() => jokeCreator('celebrity')} className='category-card'>
          <img src={celeb} className='category-image' alt='celebrity' />
          <h3 className='category-title'>Celebrity</h3>
        </div>
        <div onClick={() => jokeCreator('dev')} className='category-card'>
          <img src={dev} className='category-image' alt='dev' />
          <h3 className='category-title'>Dev</h3>
        </div>
        <div onClick={() => jokeCreator('explicit')} className='category-card'>
          <img src={explicit} className='category-image' alt='explicit' />
          <h3 className='category-title'>Explicit</h3>
        </div>
        <div onClick={() => jokeCreator('history')} className='category-card'>
          <img src={history} className='category-image' alt='history' />
          <h3 className='category-title'>History</h3>
        </div>
        <div onClick={() => jokeCreator('food')} className='category-card'>
          <img src={food} className='category-image' alt='food' />
          <h3 className='category-title'>Food</h3>
        </div>
        <div onClick={() => jokeCreator('fashion')} className='category-card'>
          <img src={fashion} className='category-image' alt='fashion' />
          <h3 className='category-title'>Fashion</h3>
        </div>
        <div onClick={() => jokeCreator('money')} className='category-card'>
          <img src={money} className='category-image' alt='money' />
          <h3 className='category-title'>Money</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
