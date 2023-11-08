import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title', () => {
  render(<App />);
  const element = screen.getByText("Will's Awesome Counter");
  expect(element).toBeInTheDocument();
});
