import React from 'react';
import { render } from 'react-testing-library';

import Container from '../Container';

describe('<Cards />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<Container />);
    expect(firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Container />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<Container id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<Container attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
