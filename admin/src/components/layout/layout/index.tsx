import React from "react";
import {Grid, Layout as AntdLayout} from "antd";
import {RefineThemedLayoutV2Props, ThemedLayoutContextProvider} from "@refinedev/antd";
import {Header, Sider} from "@components/layout";

export const Layout: React.FC<RefineThemedLayoutV2Props> = ({
                                                              children,
                                                              OffLayoutArea,
                                                            }) => {
  const breakpoint = Grid.useBreakpoint();

  const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;

  return (
    <ThemedLayoutContextProvider>
      <AntdLayout style={{height: "100vh"}}>
        <Sider/>
        <AntdLayout>
          <Header/>
          <AntdLayout.Content>
            <div
              style={{
                height: '100%',
                padding: '1em',
                margin: 0
              }}
            >
              {children}
            </div>
            {OffLayoutArea && <OffLayoutArea/>}
          </AntdLayout.Content>
          {/*{Footer && <Footer/>}*/}
        </AntdLayout>
      </AntdLayout>
    </ThemedLayoutContextProvider>
  );
};
