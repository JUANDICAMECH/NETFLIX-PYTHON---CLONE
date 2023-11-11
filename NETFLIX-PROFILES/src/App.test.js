import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile selection text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Selecciona tu Perfil/i);
  expect(linkElement).toBeInTheDocument();
});
