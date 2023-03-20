import React, {useState} from "react";
import {
  ITreeMenu,
  CanAccess,
  useRefineContext,
  useIsExistAuthentication,
  useTranslate,
  useLogout,
  useMenu,
} from "@refinedev/core";

import {Sider as AntdSider} from "@refinedev/antd";
import {Layout as AntdLayout, Menu, Grid} from "antd";
import Image from 'next/image'

import {
  DashboardOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {antLayoutSider, antLayoutSiderMobile} from "./styles";
import Link from "next/link";
import Icon from "@components/ui/icon";


export const Sider: typeof AntdSider = ({render}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const isExistAuthentication = useIsExistAuthentication();
  const {mutate: mutateLogout} = useLogout();
  const translate = useTranslate();
  const {menuItems, selectedKey, defaultOpenKeys} = useMenu();
  const {hasDashboard} = useRefineContext();
  const {SubMenu} = Menu;

  const breakpoint = Grid.useBreakpoint();

  const isMobile =
    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
    return tree.map((item: ITreeMenu) => {
      const {
        icon,
        label,
        route,
        name,
        children,
        parentName,
        meta,
        options,
      } = item;

      if (children.length > 0) {
        return (
          <SubMenu
            key={route}
            icon={icon ?? <UnorderedListOutlined/>}
            title={label}
          >
            {renderTreeView(children, selectedKey)}
          </SubMenu>
        );
      }
      const isSelected = route === selectedKey;
      const isRoute = !(
        (meta?.parent ?? options?.parent ?? parentName) !== undefined &&
        children.length === 0
      );
      return (
        <CanAccess
          key={route}
          resource={name.toLowerCase()}
          action="list"
          params={{resource: item}}
        >
          <Menu.Item
            key={route}
            style={{
              fontWeight: isSelected ? "bold" : "normal",
            }}
            icon={icon ?? (isRoute && <UnorderedListOutlined/>)}
          >
            {route ? <Link href={route}>{label}</Link> : label}
            {!collapsed && isSelected && (
              <div className="ant-menu-tree-arrow"/>
            )}
          </Menu.Item>
        </CanAccess>
      );
    });
  };

  const logout = isExistAuthentication && (
    <Menu.Item
      key="logout"
      onClick={() => mutateLogout()}
      icon={<LogoutOutlined/>}
    >
      {translate("buttons.logout", "Logout")}
    </Menu.Item>
  );

  const dashboard = hasDashboard ? (
    <Menu.Item
      key="dashboard"
      style={{
        fontWeight: selectedKey === "/" ? "bold" : "normal",
      }}
      icon={<DashboardOutlined/>}
    >
      <Link href="/">{translate("dashboard.title", "Dashboard")}</Link>
      {!collapsed && selectedKey === "/" && (
        <div className="ant-menu-tree-arrow"/>
      )}
    </Menu.Item>
  ) : null;

  const items = renderTreeView(menuItems, selectedKey);

  const renderSider = () => {
    if (render) {
      return render({
        dashboard,
        items,
        logout,
        collapsed,
      });
    }
    return (
      <>
        {dashboard}
        {items}
        {/*{logout}*/}
      </>
    );
  };

  return (
    <AntdLayout.Sider
      // collapsible
      collapsedWidth={isMobile ? 0 : 80}
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
      style={isMobile ? antLayoutSiderMobile : antLayoutSider}
    >
      <Link href="/">
        {collapsed ? (
          <Icon.LogoMini style={{
            padding: "12px 24px"
          }}/>
        ) : (
          <>
            <Icon.Logo style={{
              width: "200px",
              padding: "12px 24px"
            }}/>
          </>
        )}
      </Link>
      <Menu
        theme="dark"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[selectedKey]}
        mode="inline"
        onClick={() => {
          if (!breakpoint.lg) {
            setCollapsed(true);
          }
        }}
      >
        {renderSider()}
      </Menu>
    </AntdLayout.Sider>
  );
};
