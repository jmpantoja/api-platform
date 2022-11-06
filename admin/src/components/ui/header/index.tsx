import {useGetLocale, useLogout} from "@pankod/refine-core";
import {AntdLayout, Avatar, Button, Dropdown, Menu, Space,} from "@pankod/refine-antd";
import NextRouter from "@pankod/refine-nextjs-router";
import {useRouter} from "next/router";
import {Icon} from "@components/ui/icon"
import ArrowDown from "@components/ui/icon/arrow-down";
import {ItemType} from "antd/es/menu/hooks/useItems";
import styles from "./styles.module.less";
import React from "react";
import useLayout from "@contexts/layout";

const {Link} = NextRouter;

const LogoutButton = () => {
  const {mutate: logout} = useLogout();
  const icon = <Icon.Logout style={{fontSize: '3em'}}/>
  return <Button type="link" icon={icon} onClick={() => logout()}/>
}

export const Header: React.FC = () => {
  const locale = useGetLocale();
  const {locales} = useRouter();
  const currentLocale = locale();
  const {collapsed, setCollapsed} = useLayout();


  const items = (locales: string[]) => {

    return locales.sort().map((lang: string): ItemType => {
      return {
        key: lang,
        icon: (
          <span style={{marginRight: 8}}>
              <Avatar size={16} src={`/images/flags/${lang}.svg`}/>
          </span>
        ),
        label: (
          <Link href="/" locale={lang}>
            {lang === "es" ? "Español" : "English"}
          </Link>
        )
      }
    })
  }

  const menu = (
    <Menu selectedKeys={currentLocale ? [currentLocale] : []} items={items(locales || [])} />
  );

  return (
    <AntdLayout.Header
      className={styles['layout-header']}
    >
      <div className={'header-group'}>
        <Button
          type="link" icon={<Icon.Menu/>}
          className={'btn-menu'}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className={'header-group'}>
        <Dropdown overlay={menu}>
          <Button type="link">
            <Space>
              <Avatar size={16} src={`/images/flags/${currentLocale}.svg`}/>
              <span>{currentLocale === "es" ? "Español" : "English"}</span>
              <ArrowDown style={{fontSize: '1.5em', verticalAlign:"bottom"}}/>
            </Space>
          </Button>
        </Dropdown>
        <LogoutButton/>
      </div>
    </AntdLayout.Header>
  );
};
