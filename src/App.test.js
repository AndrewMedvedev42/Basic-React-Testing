import { render } from '@testing-library/react';
import App from './App';

test('Is there a h1?', () => {
  const { getByText} = render(<App />);
  const h1 = getByText(/what/);
  expect(h1).toBeInTheDocument();
});
