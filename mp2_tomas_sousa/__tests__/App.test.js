import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders MP2 - Tomas Sousa heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/MP2 - Tomas Sousa/i);
  expect(headingElement).toBeInTheDocument();
});
