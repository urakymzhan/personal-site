import React from 'react';
import { useLocation } from 'react-router-dom';
import LayoutWrapper from '../utils/Layout';

export default function NoMatch() {
  let location = useLocation();
  return (
    <LayoutWrapper>
      <h2>
        No Such Page Found for <code>{location.pathname}</code>
      </h2>
      <h1>
        {' '}
        {'<'} 404 {'>'}{' '}
      </h1>
    </LayoutWrapper>
  );
}
