import axios from 'axios';
import { setFlash } from './flash';

export const fetchBeers = () => {
  return(dispatch) => {
    axios.get('/api/all_beers')
      .then( res => {
        const { data: beers, } = res;
        dispatch({ type: 'SET_BEERS', beers: beers });
      })
      .catch( res => {
        dispatch(setFlash('Error fetching beers. Try again!', 'red'));
    });
  }
}