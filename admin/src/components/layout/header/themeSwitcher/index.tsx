import {Switch} from "antd";
import {useContext} from "react";
import {ColorModeContext} from "@contexts";

export const ThemeSwitcher = () => {
  const {mode, setMode} = useContext(ColorModeContext);
  return <Switch
    checkedChildren="🌛"
    unCheckedChildren="🔆"
    onChange={() => setMode(mode === "light" ? "dark" : "light")}
    defaultChecked={mode === "dark"}
  />
}
