/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Fetch all retailers
export const FETCH_RETAILERS_REQUEST = 'zilch/App/FETCH_RETAILERS_REQUEST';
export const FETCH_RETAILERS_SUCCESS = 'zilch/App/FETCH_RETAILERS_SUCCESS';
export const FETCH_RETAILERS_FAILURE = 'zilch/App/FETCH_RETAILERS_FAILURE';

// Fetch retailer by id
export const FETCH_RETAILER_REQUEST = 'zilch/App/FETCH_RETAILER_REQUEST';
export const FETCH_RETAILER_SUCCESS = 'zilch/App/FETCH_RETAILER_SUCCESS';
export const FETCH_RETAILER_FAILURE = 'zilch/App/FETCH_RETAILER_FAILURE';
