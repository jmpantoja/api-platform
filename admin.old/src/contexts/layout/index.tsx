import {createContext, ReactNode, useContext, useState} from 'react';


interface LayoutProps {
  collapsed: boolean,
  setCollapsed: (collapsed: boolean) => void
}

const LayoutContext = createContext<LayoutProps>({
  collapsed: false,
  setCollapsed: (_: boolean) => {
  }
});

export const LayoutContextProvider = ({children}: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        collapsed,
        setCollapsed
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const useLayout = (): LayoutProps => {
  return useContext<LayoutProps>(LayoutContext)
}

export default useLayout;
