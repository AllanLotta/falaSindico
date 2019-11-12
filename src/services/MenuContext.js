import React, {useState, createContext, useEffect} from 'react';

export const MenuContext = createContext();

export default function MenuProvider(props) {
  const {children} = props;
  const [menu, setMenu] = useState(false);
  const [activeRouter, setActiveRouter] = useState();

  useEffect(() => {}, []);

  return (
    <MenuContext.Provider
      value={[menu, setMenu, activeRouter, setActiveRouter]}>
      {children}
    </MenuContext.Provider>
  );
}
