import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App Component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the counter button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /Count is/i });
    expect(buttonElement).toBeInTheDocument();
  });
});