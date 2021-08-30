/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { push } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Card from 'components/Card';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectRetailers,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import { fetchRetailers } from 'containers/App/actions';
import Cards from './Cards';
import CenteredSection from './CenteredSection';
import messages from './messages';
import saga from './saga';

const key = 'home';

export function HomePage({ retailers, onInit, history, loading, error }) {
  useInjectSaga({ key, saga });

  const handleClick = route => {
    history.push(route);
  };

  useEffect(() => {
    onInit();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js application to select retailers."
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.selectARetailer} />
          </H2>
          {error && <FormattedMessage {...messages.errorLoading} />}
          <Cards>
            {retailers &&
              retailers.map(retailer => (
                <Card
                  key={retailer.id}
                  title={retailer.title}
                  description={retailer.shortDescription}
                  image={retailer.image}
                  handleClick={handleClick}
                />
              ))}
          </Cards>
        </CenteredSection>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  retailers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onInit: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  retailers: makeSelectRetailers(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onInit: () => dispatch(fetchRetailers()),
    changeRoute: route => dispatch(push(route)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
  memo,
)(HomePage);
