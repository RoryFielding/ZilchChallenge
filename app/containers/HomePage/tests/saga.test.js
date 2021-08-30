/**
 * Tests for HomePage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import { FETCH_RETAILERS_REQUEST } from 'containers/App/constants';

import retailersData, { fetchRetailers } from '../saga';

describe('retailersDataSaga Saga', () => {
  const retailersDataSaga = retailersData();

  it('should start task to watch for FETCH_RETAILERS_REQUEST action', () => {
    const takeLatestDescriptor = retailersDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(FETCH_RETAILERS_REQUEST, fetchRetailers),
    );
  });
});
