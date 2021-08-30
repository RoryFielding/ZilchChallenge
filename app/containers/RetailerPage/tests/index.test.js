/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { HomePage } from '../index';
import configureStore from '../../../configureStore';

describe('<RetailerPage />', () => {
  let store;
  const location = {
    pathname: '/amazon',
  };
  const onInit = jest.fn();

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            loading={false}
            error={false}
            retailers={[]}
            location={location}
            onInit={onInit}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the retailers on mount', () => {
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            loading={false}
            error={false}
            retailers={[]}
            location={location}
            onInit={onInit}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(onInit).toHaveBeenCalled();
  });
});
