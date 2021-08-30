/* eslint-disable prefer-destructuring */
/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  FETCH_RETAILERS_REQUEST,
  FETCH_RETAILERS_SUCCESS,
  FETCH_RETAILERS_FAILURE,
  FETCH_RETAILER_REQUEST,
  FETCH_RETAILER_SUCCESS,
  FETCH_RETAILER_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  retailers: false,
  retailer: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_RETAILERS_REQUEST:
        draft.loading = true;
        draft.error = false;
        draft.retailers = false;
        break;

      case FETCH_RETAILERS_SUCCESS:
        draft.loading = false;
        draft.retailers = action.payload;
        break;

      case FETCH_RETAILERS_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;

      case FETCH_RETAILER_REQUEST:
        draft.loading = true;
        draft.error = false;
        draft.retailer = false;
        break;

      case FETCH_RETAILER_SUCCESS:
        draft.loading = false;
        draft.retailer = action.payload[0];
        break;

      case FETCH_RETAILER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
