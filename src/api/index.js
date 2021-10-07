/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import axios from 'axios';

const url =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '8cf9786e9fmshb177267cae95c1cp11975bjsne7f16808504d'
  }
};

export const getRestaurantsData = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(url, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
