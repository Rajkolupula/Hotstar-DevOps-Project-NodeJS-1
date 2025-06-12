import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with the provided name', () => {
  render(<Greeting name="Hotstar" />);
  const headingElement = screen.getByText(/Hello, Hotstar!/i);
  expect(headingElement).toBeInTheDocument();
});
