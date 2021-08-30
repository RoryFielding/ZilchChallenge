/*
 * RetailerPage Messages
 *
 * This contains all the text for the RetailerPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'zilch.containers.RetailerPage';

export default defineMessages({
  errorLoading: {
    id: `${scope}.errorLoading.header`,
    defaultMessage:
      'There was an error loading the data. Please check the json-server is running by the documentation in README.md.',
  },
});
