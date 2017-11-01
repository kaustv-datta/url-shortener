import { PROXY_URL } from '../configs';

// GET /:shortcode API
export const fetchShortcode = url => fetch(`${PROXY_URL}/shorten`, {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  body: JSON.stringify({
    url,
  }),
}).then(resp => resp.json());

export default fetchShortcode;
