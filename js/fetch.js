import api_key from '../api_keys.js';

const fetchDatas = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + api_key,
      },
    };
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1',
      options
    );
    if (response.status === 404) {
      throw new Error('401, Unauthorized');
    }
    if (response.status === 500) {
      throw new Error('500, Internal servor error');
    }
    const datas = await response.json();
    return datas.results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDatas;
