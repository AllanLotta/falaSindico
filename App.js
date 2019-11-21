import React from 'react';
import Root from './src';

import MenuProvider from './src/services/MenuContext';
import DataProvider from './src/services/DataContext';
import DetailProvider from './src/services/DetailContext';

export default function App() {
  return (
    <>
      <DetailProvider>
        <DataProvider>
          <MenuProvider>
            <Root />
          </MenuProvider>
        </DataProvider>
      </DetailProvider>
    </>
  );
}
