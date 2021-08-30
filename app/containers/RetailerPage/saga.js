/**
 * Gets a retailer by name
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_RETAILER_REQUEST } from 'containers/App/constants';
import {
  fetchRetailerSuccess,
  fetchRetailerFailure,
} from 'containers/App/actions';

import request from 'utils/request';

/**
 * Fetch retailer request/response handler
 */
export function* fetchRetailer({ name }) {
  const requestURL = `http://localhost:3001/retailers?searchName=${name}`;
  try {
    // Call our request helper (see 'utils/request')
    const retailer = yield call(request, requestURL);
    yield put(fetchRetailerSuccess(retailer));
  } catch (err) {
    yield put(fetchRetailerFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* retailerData() {
  // Watches for FETCH_RETAILER_REQUEST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_RETAILER_REQUEST, fetchRetailer);
}
