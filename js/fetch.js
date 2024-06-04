import api_key from '../api_keys.js';

/**
 * Fetch datas from https://developer.themoviedb.org/reference/intro/getting-started api
 * @returns {Object}
 */
const fetchDatas = async (url) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + api_key,
      },
    };
    const response = await fetch(url, options);
    if (response.status === 404) {
      throw new Error('401, Unauthorized');
    }
    if (response.status === 500) {
      throw new Error('500, Internal servor error');
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDatas;
