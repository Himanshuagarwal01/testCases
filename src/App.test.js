import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// jest is the testing library but whereas the enzyme is the testing framwork 
// testing library is used to test the basic dom manipulation but the framework can test the functionality among the components celo and deep rendering .
