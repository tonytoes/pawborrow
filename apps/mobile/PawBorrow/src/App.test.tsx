import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { test, expect, vi } from 'vitest';
import App from './App';
import Login from './pages/Login';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('submits valid credentials and calls login callback', async () => {
  const user = userEvent.setup();
  const onLoginSuccess = vi.fn();

  render(
    <MemoryRouter>
      <Login onLoginSuccess={onLoginSuccess} />
    </MemoryRouter>
  );

  await user.type(screen.getByLabelText(/email/i), 'test@pawborrow.com');
  await user.type(screen.getByLabelText(/password/i), 'password123');
  await user.click(screen.getByRole('button', { name: /^LOGIN$/i }));

  expect(onLoginSuccess).toHaveBeenCalledTimes(1);
});
