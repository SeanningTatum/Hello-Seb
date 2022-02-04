/* eslint-disable import/prefer-default-export */
import toQueryString from '../utils/toQueryString';

const API_KEY = '25546635-a89d19930e5ba6ac88b344ca8';

// https://pixabay.com/api/docs/
export async function searchPixabay(searchTerm) {
  const qs = toQueryString({
    q: searchTerm, key: API_KEY, image_type: 'photo', per_page: 20,
  });

  const url = `https://pixabay.com/api/?${qs}`;

  const response = await fetch(url);
  const body = await response.json();

  return body;
}
