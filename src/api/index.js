// import { get } from 'lodash';
import axios from 'axios';

// const MAIN_API_URL = 'http://musicbrainz.org/ws/2/release-group/?query=artist:radiohead&fmt=json';

export default (params) => {
  const config = {
    url: 'http://musicbrainz.org/ws/2/release-group/',
    method: 'GET',
    params: {
      query: params.term,
      fmt: 'json',
    }
  };

  const request = axios.request(config)
    .then(res => res.data)
    .catch(err => err);

  return request;
};