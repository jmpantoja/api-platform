import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import {ConfigProvider, theme} from "antd";
import {parseCookies} from "nookies";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
                                                                        children,
                                                                      }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setMode(parseCookies()["theme"] || "light");
    }
  }, [isMounted]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const {darkAlgorithm, defaultAlgorithm} = theme;

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
          token: {
            colorPrimary: '#1677ff',
            // colorLink: '#fff'
            // colorBgBase: '#FFF',
            // colorBgLayout: '#FFF'
          },
          components: {
            Menu: {
              colorItemText: "#fff",
              radiusItem: 5
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
