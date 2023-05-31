import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const jokesReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_JOKE:
      draftState.current = action.payload;
      draftState.all = action.payload;
      break;

    // case ActionTypes.FETCH_POSTS:
    //   draftState.all = action.payload;
    //   break;

    // case ActionTypes.FETCH_POST:
    //   draftState.current = action.payload;
    //   break;

    // case ActionTypes.UPDATE_POST:
    //   draftState.current = action.payload;
    //   break;

    // case ActionTypes.DELETE_POST:
    //   delete draftState.current;
    //   break;

    default:
      break;
  }
}, initialState);

export default jokesReducer;
