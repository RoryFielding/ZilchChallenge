/*
 * RetailerPage
 *
 * This page is shown once a user selects a retailer card, at the '/:retailer' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectRetailer,
  makeSelectLocation,
} from 'containers/App/selectors';
import { fetchRetailer } from 'containers/App/actions';
import Container from './Container';
import Description from './Description';
import Image from './Image';
import messages from './messages';
import saga from './saga';

const key = 'home';

export function HomePage({ retailer, onInit, location, loading, error }) {
  useInjectSaga({ key, saga });
  const name = location.pathname.split('/')[1];

  useEffect(() => {
    if (name) {
      onInit(name);
    }
  }, [location]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <article>
      <Helmet>
        <title>Retailer Page</title>
        <meta
          name="description"
          content="A React.js application to provide detail on a specific retailer."
        />
      </Helmet>
      <Container>
        {error && <FormattedMessage {...messages.errorLoading} />}
        {retailer && (
          <>
            <H2>{retailer.title}</H2>
            <Image src={retailer.image} alt="Image unavailable." />
            <Description>{retailer.description}</Description>
            <Link to={{ pathname: retailer.url }} target="_blank">
              {retailer.url}
            </Link>
          </>
        )}
      </Container>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  retailer: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onInit: PropTypes.func,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  retailer: makeSelectRetailer(),
  location: makeSelectLocation(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onInit: name => dispatch(fetchRetailer(name)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
