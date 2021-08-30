import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectRetailer,
  makeSelectRetailers,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectRetailer', () => {
  const retailerSelector = makeSelectRetailer();
  it('should select the retailer', () => {
    const retailer = 'amazon';
    const mockedState = {
      global: {
        retailer,
      },
    };
    expect(retailerSelector(mockedState)).toEqual(retailer);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectRetailers', () => {
  const retailersSelector = makeSelectRetailers();
  it('should select the retailers', () => {
    const retailers = [];
    const mockedState = {
      global: {
        retailers,
      },
    };
    expect(retailersSelector(mockedState)).toEqual(retailers);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
