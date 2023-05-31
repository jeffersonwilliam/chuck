import { combineReducers } from '@reduxjs/toolkit';
import jokesReducer from './jokesReducer';

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

export default rootReducer;
