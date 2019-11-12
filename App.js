import React from 'react';
import Root from './src';

import MenuProvider from './src/services/MenuContext';

export default function App() {
  return (
    <>
      <MenuProvider>
        <Root />
      </MenuProvider>
    </>
  );
}
