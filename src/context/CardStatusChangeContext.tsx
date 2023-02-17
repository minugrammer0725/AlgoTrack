import { useState, createContext, FC, ReactElement, PropsWithChildren } from 'react';

export const CardStatusChangeContext = createContext({
  updated: false,
  toggle() {console.log('toggle')} 
});

export const CardStatusChangeContextProvider:FC<PropsWithChildren> = (props): ReactElement => {
  const [updated, setUpdated] = useState(false);
  
  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return <CardStatusChangeContext.Provider value={{
    updated,
    toggle: toggleHandler
  }}>
    {props.children}
  </CardStatusChangeContext.Provider>
};