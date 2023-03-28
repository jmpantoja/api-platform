import {Layout as AntdLayout,} from "antd";
import {LangSwitcher} from "./langSwitcher";
import {ThemeSwitcher} from "./themeSwitcher";
import {UserPanel} from "./userPanel";

export const Header: React.FC = () => {
    return (
      <AntdLayout.Header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0px 24px",
          height: "64px",
        }}
      >
        <ThemeSwitcher/>
        <LangSwitcher/>
        <UserPanel/>
      </AntdLayout.Header>
    );
  }
