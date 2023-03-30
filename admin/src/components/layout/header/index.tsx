import {Layout as AntdLayout,} from "antd";
import {LangSwitcher} from "./langSwitcher";
import {UserPanel} from "./userPanel";

export const Header: React.FC = () => {
  return (
    <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "70px"
      }}
    >
      <LangSwitcher/>
      <UserPanel/>
    </AntdLayout.Header>
  );
}
