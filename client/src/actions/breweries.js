import axios from 'axios';
import { setFlash } from './flash';

export const fetchBreweries = () => {
  return(dispatch) => {
    axios.get('/api/all_breweries')
      .then( res => {
        const { data: breweries, } = res;
        dispatch({ type: 'SET_BREWERIES', breweries: breweries });
      })
      .catch( res => {
        dispatch(setFlash('Error fetching breweries. Try again!', 'red'));
    });
  }
}