import React from "react";
import {AntdLayout, Grid, Menu, Sider as DefaultSider,} from "@pankod/refine-antd";
import {CanAccess, ITreeMenu, useCan, useMenu, useRefineContext, useRouterContext, useTitle, useTranslate,} from "@pankod/refine-core";

import {Title as DefaultTitle} from "@components/ui/title";

// import {antLayoutSider, antLayoutSiderMobile} from "./styles";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {Icon} from "@components/ui/icon";
import styles from './styles.module.less'
import useLayout from "@contexts/layout";
import resource from "*.less";


export const Sider: typeof DefaultSider = () => {
  // const [collapsed, setCollapsed] = useState<boolean>(false);
  const {collapsed, setCollapsed} = useLayout()

  const {Link} = useRouterContext();
  const Title = useTitle();
  const translate = useTranslate();
  const {menuItems, selectedKey, defaultOpenKeys} = useMenu();
  const breakpoint = Grid.useBreakpoint();
  const {hasDashboard} = useRefineContext();
  const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;
  const RenderToTitle = Title ?? DefaultTitle;

  const makeMenuTree = (items: ITreeMenu[]): ItemType[] => {
    return items.map((item: ITreeMenu) => {
      return MakeMenuItem(item)
    });
  }

  const makeDashboardItem = (hasDashboard: boolean): ItemType | null => {
    return !hasDashboard ? null : MakeMenuItem({
      name: 'dashboard',
      route: '/',
      label: 'dashboard.title',
      icon: <Icon.Home/>,
      children: []
    })
  }

  function MakeMenuItem(item: ITreeMenu): ItemType {
    const {route, name, icon, children, label} = item;
    const key = route as string

    const {data} = useCan({
      resource: name.toLowerCase(),
      action: "list",
      params: {
        resource: item,
      }
    })

    if (!data?.can) {
      return null
    }

    const anchor = name.toLowerCase() === label?.toLowerCase()
      ? `${name}.titles.list`
      : label as string


    return {
      key,
      icon,
      // ...more,
      style: {
        fontWeight: selectedKey === key ? "bold" : "normal",
      },
      label: (
        <CanAccess
          key={route}
          resource={name.toLowerCase()}
          action="list"
          params={{
            resource: item,
          }}
        >
          <Link href={route}>{translate(anchor)}</Link>
        </CanAccess>
      ),
      children: children.length > 0 ? makeMenuTree(children) : undefined
    }
  }

  const items: ItemType[] = [
    makeDashboardItem(hasDashboard),
    ...makeMenuTree(menuItems)
  ];


  return (
    <AntdLayout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
      collapsedWidth={isMobile ? 0 : 80}
      breakpoint="lg"
      className={isMobile ? styles['ant-layout-sider-mobile'] : styles['ant-layout-sider']}
      width="225"
    >
      <RenderToTitle collapsed={collapsed}/>
      <Menu
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
