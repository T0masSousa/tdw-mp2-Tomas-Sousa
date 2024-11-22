import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders MP2 - Tomas Sousa heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/MP2 - Tomas Sousa/);
  expect(headingElement).toBeInTheDocument();
});
