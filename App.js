import React from 'react';
import Root from './src';

import MenuProvider from './src/services/MenuContext';
import DataProvider from './src/services/DataContext';

export default function App() {
  return (
    <>
      <DataProvider>
        <MenuProvider>
          <Root />
        </MenuProvider>
      </DataProvider>
    </>
  );
}
