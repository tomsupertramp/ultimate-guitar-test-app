import {
  all,
  fork,
} from 'redux-saga/effects';

/* Sagas */
import { mainSaga } from '../../ducks';

export default function* rootSaga() {
  yield all([
    fork(mainSaga),
  ]);
}