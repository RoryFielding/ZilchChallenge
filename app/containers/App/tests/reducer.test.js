import produce from 'immer';

import appReducer from '../reducer';
import {
  fetchRetailers,
  fetchRetailersSuccess,
  fetchRetailersFailure,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      retailers: false,
      retailer: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchRetailers action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.retailers = false;
    });

    expect(appReducer(state, fetchRetailers())).toEqual(expectedResult);
  });

  it('should handle the fetchRetailersSuccess action correctly', () => {
    const payload = 'test';
    const expectedResult = produce(state, draft => {
      draft.retailers = payload;
      draft.loading = false;
    });

    expect(appReducer(state, fetchRetailersSuccess(payload))).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchRetailersFailure action correctly', () => {
    const payload = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = payload;
      draft.loading = false;
    });

    expect(appReducer(state, fetchRetailersFailure(payload))).toEqual(
      expectedResult,
    );
  });
});
