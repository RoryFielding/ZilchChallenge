/*
 * App Actions
 *
 * Actions change things in your application
 * Since this app uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_RETAILERS_REQUEST,
  FETCH_RETAILERS_SUCCESS,
  FETCH_RETAILERS_FAILURE,
  FETCH_RETAILER_REQUEST,
  FETCH_RETAILER_SUCCESS,
  FETCH_RETAILER_FAILURE,
} from './constants';

/**
 * Load the retailers, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_RETAILERS_REQUEST
 */
export function fetchRetailers() {
  return {
    type: FETCH_RETAILERS_REQUEST,
  };
}

/**
 * Dispatched when the retailers are loaded by the request saga
 *
 * @param  {array} payload The retailers data
 *
 * @return {object}      An action object with a type of FETCH_RETAILERS_SUCCESS passing the retailers
 */
export function fetchRetailersSuccess(payload) {
  return {
    type: FETCH_RETAILERS_SUCCESS,
    payload,
  };
}

/**
 * Dispatched when loading the retailers fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_RETAILERS_FAILURE passing the error
 */
export function fetchRetailersFailure(error) {
  return {
    type: FETCH_RETAILERS_FAILURE,
    error,
  };
}

/**
 * Load a retailer by name, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_RETAILER_REQUEST
 */
export function fetchRetailer(name) {
  return {
    type: FETCH_RETAILER_REQUEST,
    name,
  };
}

/**
 * Dispatched when the retailer is loaded by the request saga
 *
 * @param  {array} payload The retailer data
 *
 * @return {object}      An action object with a type of FETCH_RETAILER_SUCCESS passing the retailers
 */
export function fetchRetailerSuccess(payload) {
  return {
    type: FETCH_RETAILER_SUCCESS,
    payload,
  };
}

/**
 * Dispatched when loading the retailer fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_RETAILER_FAILURE passing the error
 */
export function fetchRetailerFailure(error) {
  return {
    type: FETCH_RETAILER_FAILURE,
    error,
  };
}
