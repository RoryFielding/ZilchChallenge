import React from 'react';
import { render } from 'react-testing-library';

import Cards from '../Cards';

describe('<Cards />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<Cards />);
    expect(firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Cards />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<Cards id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<Cards attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
