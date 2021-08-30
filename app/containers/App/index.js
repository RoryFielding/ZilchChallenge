/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePage from 'containers/HomePage/Loadable';
import RetailerPage from 'containers/RetailerPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { makeSelectRetailers } from './selectors';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

function App({ retailers }) {
  const [validRetailerPaths, setValidRetailerPaths] = useState(false);

  useEffect(() => {
    if (retailers) {
      const pathConstraints = retailers.map(d => d.searchName).join('|');
      setValidRetailerPaths(pathConstraints);
    }
  }, [retailers]);

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Zilch" defaultTitle="Zilch">
        <meta name="description" content="A Zilch test application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={`/:retailer(${validRetailerPaths})`}
          component={RetailerPage}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  retailers: makeSelectRetailers(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

App.propTypes = {
  retailers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default compose(withConnect)(App);
