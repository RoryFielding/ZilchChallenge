/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Container from './Container';
import messages from './messages';

export default function NotFound() {
  return (
    <Container>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </Container>
  );
}
