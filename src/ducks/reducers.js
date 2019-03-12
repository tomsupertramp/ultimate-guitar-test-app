import types from './types';
import { omit } from 'lodash';

const initialState = {
  albums: {},
  savedAlbums: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        albums: action.data,
      }
    case types.SAVE_ALBUM:
      return {
        ...state,
        savedAlbums: {
          ...state.savedAlbums,
          [action.data.id]: action.data,
        }
      }
    case types.REMOVE_ALBUM:
      return {
        ...state,
        savedAlbums: omit(state.savedAlbums, action.id),
      }  
    case types.GET_SAVED_ALBUMS:
      return {
        ...state,
        savedAlbums: action.data,
      }   
    default:
      return state;
  }
};
