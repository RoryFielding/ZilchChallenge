import {
  FETCH_RETAILER_REQUEST,
  FETCH_RETAILER_SUCCESS,
  FETCH_RETAILER_FAILURE,
  FETCH_RETAILERS_REQUEST,
  FETCH_RETAILERS_SUCCESS,
  FETCH_RETAILERS_FAILURE,
} from '../constants';

import {
  fetchRetailer,
  fetchRetailerSuccess,
  fetchRetailerFailure,
  fetchRetailers,
  fetchRetailersSuccess,
  fetchRetailersFailure,
} from '../actions';

describe('App Actions', () => {
  describe('fetchRetailer', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: FETCH_RETAILER_REQUEST,
      };

      expect(fetchRetailer()).toEqual(expectedResult);
    });
  });

  describe('fetchRetailerSuccess', () => {
    it('should return the correct type and the passed retailers', () => {
      const payload = 'test';
      const expectedResult = {
        type: FETCH_RETAILER_SUCCESS,
        payload,
      };

      expect(fetchRetailerSuccess(payload)).toEqual(expectedResult);
    });
  });

  describe('fetchRetailerFailure', () => {
    it('should return the correct type and the error', () => {
      const payload = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: FETCH_RETAILER_FAILURE,
        error: payload,
      };

      expect(fetchRetailerFailure(payload)).toEqual(expectedResult);
    });
  });

  describe('fetchRetailers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: FETCH_RETAILERS_REQUEST,
      };

      expect(fetchRetailers()).toEqual(expectedResult);
    });
  });

  describe('fetchRetailersSuccess', () => {
    it('should return the correct type and the passed retailers', () => {
      const payload = 'test';
      const expectedResult = {
        type: FETCH_RETAILERS_SUCCESS,
        payload,
      };

      expect(fetchRetailersSuccess(payload)).toEqual(expectedResult);
    });
  });

  describe('fetchRetailersFailure', () => {
    it('should return the correct type and the error', () => {
      const payload = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: FETCH_RETAILERS_FAILURE,
        error: payload,
      };

      expect(fetchRetailersFailure(payload)).toEqual(expectedResult);
    });
  });
});
