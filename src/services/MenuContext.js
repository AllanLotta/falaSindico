import React, {useState, createContext, useEffect} from 'react';

export const MenuContext = createContext();

export default function MenuProvider(props) {
  const {children} = props;
  const [isLoged, setIsLoged] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeRouter, setActiveRouter] = useState();

  useEffect(() => {}, []);

  return (
    <MenuContext.Provider
      value={[
        menu,
        setMenu,
        activeRouter,
        setActiveRouter,
        isLoged,
        setIsLoged,
      ]}>
      {children}
    </MenuContext.Provider>
  );
}
