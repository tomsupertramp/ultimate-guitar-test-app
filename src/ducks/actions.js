import types from './types';

export const search = value => ({ type: types.SEARCH_REQUEST, value });

export default {
  search,
};