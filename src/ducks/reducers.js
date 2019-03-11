import types from './types';

// import types from './types';

const initialState = {
  albums: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        albums: action.data,
      }
    default:
      return state;
  }
};
