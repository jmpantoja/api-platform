import React, {PropsWithChildren,} from "react";
import {ConfigProvider} from "antd";
import seed from "@styles/seed"
import {SeedToken} from "antd/es/theme/interface";

interface CssToken extends SeedToken {
  white: string
}

const css = (seed as unknown as CssToken)

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({children}) => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: css.colorPrimary,
          borderRadiusLG: 0,
          borderRadiusSM: 0,
          borderRadiusXS: 0,
          borderRadius: 0,
        },
        components: {
          Layout: {
            colorBgHeader: css.colorBgBase,
            colorBgContainer: css.colorBgBase
          },
          Menu: {
            colorItemText: css.white,
            colorItemTextSelected: '#FFF',
            colorItemTextHover: css.colorPrimary,
            colorItemBg: css.colorBgBase,
            colorItemBgSelected: css.colorPrimary
          }
        }
      }}
    >
      {children}
    </ConfigProvider>)
};
