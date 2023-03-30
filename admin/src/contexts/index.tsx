import React, {PropsWithChildren,} from "react";
import {ConfigProvider} from "antd";

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({children}) => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b297',
          borderRadiusLG: 0,
          borderRadiusSM: 0,
          borderRadiusXS: 0,
          borderRadius: 0,
        },
        components: {
          Layout: {
            colorBgHeader: '#323236',
            colorBgContainer: '#323236'
          },
          Menu: {
            colorItemText: "#FFF",
            colorItemTextSelected: '#FFF',
            colorItemTextHover: '#00b297',
            colorItemBg: '#323236',
            colorItemBgSelected: '#00b297'
          }
        }
      }}
    >
      {children}
    </ConfigProvider>)
};
