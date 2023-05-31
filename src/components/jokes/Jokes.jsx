import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../../actions';
import './jokes.scss';

const Jokes = () => {
  const jokeStore = useSelector((state) => state.jokes.current);

  console.log('jokeStore value', jokeStore.value);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchJoke('animal'));
  }, []);

  const jokeCreator = (event) => {};

  return (
    <div className='jokes-container'>
      <h2 id='jokes-title'>Jokes</h2>
      <div id='jokes-holder'>{jokeStore.value}</div>
    </div>
  );
};

export default Jokes;
