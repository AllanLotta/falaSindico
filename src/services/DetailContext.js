import React, {useState, createContext, useEffect} from 'react';

export const DetailContext = createContext();

export default function DetailProvider(props) {
  const {children} = props;
  const [detail, setDetail] = useState(false);

  useEffect(() => {}, []);

  return (
    <DetailContext.Provider value={[detail, setDetail]}>
      {children}
    </DetailContext.Provider>
  );
}
