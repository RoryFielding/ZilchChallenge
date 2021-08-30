/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'zilch.containers.HomePage';

export default defineMessages({
  selectARetailer: {
    id: `${scope}.selectARetailer.header`,
    defaultMessage: 'Select a retailer:',
  },
  errorLoading: {
    id: `${scope}.errorLoading.header`,
    defaultMessage:
      'There was an error loading the data. Please check the json-server is running by the documentation in README.md.',
  },
});
