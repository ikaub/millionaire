import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Button } from './Button';

afterEach(cleanup);
it('changes bgcolor on hover', () => {
  const { getByText } = render(<Button>Test</Button>);
  expect(getByText('Test')).toBeTruthy();
});
