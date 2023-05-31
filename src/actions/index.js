import axios from 'axios';

// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://api.chucknorris.io/jokes/random?category={category}';
const ROOT_URL = 'https://api.chucknorris.io/jokes/random?category=';

export const ActionTypes = {
  FETCH_JOKE: 'FETCH_JOKE',
};

export const fetchJoke = (category) => {
  // console.log(postID);
  return function (dispatch) {
    axios
      .get(`${ROOT_URL}${category}`)
      .then((response) => {
        console.log('response', response.data);
        dispatch({ type: ActionTypes.FETCH_JOKE, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
