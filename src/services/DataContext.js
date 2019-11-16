import React, {useState, createContext, useEffect} from 'react';

export const DataContext = createContext();

export default function DataProvider(props) {
  const {children} = props;
  const [data, setData] = useState();

  useEffect(() => {}, []);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}
