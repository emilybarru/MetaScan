// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaScan title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaScan/i);
    expect(titleElement).toBeInTheDocument();
});
