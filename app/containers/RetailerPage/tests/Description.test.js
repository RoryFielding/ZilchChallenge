import React from 'react';
import { render } from 'react-testing-library';

import Description from '../Description';

describe('<Description />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<Description />);
    expect(firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Description />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<Description id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<Description attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
