import React, {useState} from "react";
import {Grid, Layout as AntdLayout, Menu, MenuProps} from "antd";
import {useMenu, useTranslate,} from "@refinedev/core";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {Title} from "@components/layout/title";
import Link from "next/link";
import {TreeMenuItem} from "@refinedev/core/dist/hooks/menu/useMenu";
import {useTranslation} from "next-i18next";


export const Sider = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const translate = useTranslate();
  const {menuItems, selectedKey, defaultOpenKeys} = useMenu();
  const breakpoint = Grid.useBreakpoint();
  const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

  type MenuItem = Required<MenuProps>['items'][number];

  function parseItem(item: TreeMenuItem): ItemType {
    const {route, name, icon, children, meta} = item;
    const parent = meta?.parent ?? null
    const key = parent ? `/${parent}/${name}` : `/${name}`
    const anchor = translate(`${name.toLowerCase()}.titles.list`)

    if ((children ?? []).length > 0) {
      return {
        key,
        icon,
        style: {
          fontWeight: selectedKey === key ? "bold" : "normal",
        },
        label: anchor,
        children: children.map(parseItem)
      }
    }

    return {
      key,
      icon,
      style: {
        fontWeight: selectedKey === key ? "bold" : "normal",
      },
      label: <Link href={route}>{anchor}</Link>,
    }
  }

  const items: MenuItem[] = menuItems.map(parseItem)

  return (

    <AntdLayout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
      collapsedWidth={isMobile ? 0 : 80}
      breakpoint="lg"
      theme={'light'}
      // style={{
      //   "backgroundColor": "red"
      // }}
    >
      <Title collapsed={collapsed}/>
      <Menu
        // theme={"dark"}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        onClick={() => {
          if (!breakpoint.lg) {
            setCollapsed(true);
          }
        }}
        items={items}
      />
    </AntdLayout.Sider>

  );
};
