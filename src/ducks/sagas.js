import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';

/* API */
import api from '../api';

/* Types */
import types from './types';

/* Schema */
const album = new schema.Entity('albums', {}, { idAttribute: 'id' });

function* search({ value }) {
  try {
    const data = yield call(api, value);
    if (data.count) {
      const normalizedData = normalize(data['release-groups'], [album]);
      yield put({ type: types.SEARCH_SUCCESS, data: normalizedData.entities.albums });
    } 
  } catch (e) {
    console.log(e);
  }
}

export function* mainSaga() {
  yield takeLatest(types.SEARCH_REQUEST, search);
}