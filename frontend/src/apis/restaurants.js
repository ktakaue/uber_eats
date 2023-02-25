import axios from 'axios';
import { restaurantsIndex } from '../urls/index';

// export const fetchRestaurants =() => {
//   return axios.get(restaurantsIndex)
//   .then(res => {
//     return res.data
//   })
//   .catch((e) => console.error(e))
// }

export const fetchRestaurants = () => {
  // export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
  return axios.get(restaurantsIndex)
    .then(res => {
    return res.data
    })
  .catch((e) => console.error(e))
}