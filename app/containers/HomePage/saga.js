/**
 * Gets the list of retailers available
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_RETAILERS_REQUEST } from 'containers/App/constants';
import {
  fetchRetailersSuccess,
  fetchRetailersFailure,
} from 'containers/App/actions';
import request from 'utils/request';

export function* fetchRetailers() {
  const requestURL = `http://localhost:3001/retailers`;

  try {
    // Call our request helper (see 'utils/request')
    const retailers = yield call(request, requestURL);
    yield put(fetchRetailersSuccess(retailers));
  } catch (err) {
    yield put(fetchRetailersFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* retailersData() {
  // Watches for FETCH_RETAILERS_REQUEST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_RETAILERS_REQUEST, fetchRetailers);
}
