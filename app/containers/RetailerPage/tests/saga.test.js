import { takeLatest } from 'redux-saga/effects';

import { FETCH_RETAILER_REQUEST } from 'containers/App/constants';

import retailerData, { fetchRetailer } from '../saga';

describe('retailerDataSaga Saga', () => {
  const retailerDataSaga = retailerData();

  it('should start task to watch for FETCH_RETAILER_REQUEST action', () => {
    const takeLatestDescriptor = retailerDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(FETCH_RETAILER_REQUEST, fetchRetailer),
    );
  });
});
