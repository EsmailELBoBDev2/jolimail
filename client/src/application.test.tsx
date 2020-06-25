import { render } from '@testing-library/react';
import React from 'react';

import App from './application';

test('renders logo', () => {
  const { container } = render(<App />);
  const titleElement = container.querySelector('[alt="Jolimail"]');
  expect(titleElement).toBeInTheDocument();
});
