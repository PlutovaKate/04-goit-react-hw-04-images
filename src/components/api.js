import axios from 'axios';

const API_KEY = '35881420-2d2d98e14b45a58eae8e32dce';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async ({ query, page }) => {
  return await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
