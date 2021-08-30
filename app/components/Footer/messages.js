/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'zilch.components.Footer';

export default defineMessages({
  codingChallenge: {
    id: `${scope}.codingChallenge.message`,
    defaultMessage: 'Zilch coding challenge',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made by {author}
    `,
  },
});
