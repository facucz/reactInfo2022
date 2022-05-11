import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Notice is present in the DOM', () => {
  render(<App />);
  const linkElement = screen.getByText('Curso REACT 2022');
  expect(linkElement).toBeInTheDocument();
});