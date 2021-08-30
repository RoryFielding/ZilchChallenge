import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import App from '../index';
import configureStore from '../../../configureStore';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  let store;
  const retailers = [
    {
      id: 1,
      title: 'amazon',
      description: 'test',
      shortDescription: 'test',
      searchName: 'amazon',
      image: 'test',
    },
  ];

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    renderer.render(
      <Provider store={store}>
        <App retailers={retailers} />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
