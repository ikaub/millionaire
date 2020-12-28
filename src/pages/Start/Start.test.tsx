import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent, getByText, queryByText } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './../../App';

afterEach(cleanup);
beforeEach(() => {
  render(
    <Router>
      <App />
    </Router>,
  );
});

describe('Start screen', () => {
  it('should load the image', () => {
    expect(document.querySelector('img')).toBeInTheDocument();
  });

  it('should display the text correctly', () => {
    expect(getByText(document.documentElement, /millionaire/)).toBeVisible();
  });

  it('should display the button which leads to the game screen', () => {
    const button = queryByText(document.documentElement, 'Start');
    expect(button).toBeVisible();
    fireEvent.click(button!);
    expect(button).not.toBeInTheDocument();
  });
});
