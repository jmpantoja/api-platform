import {Avatar, Button, Dropdown, Space, Typography} from "antd";
import {useActiveAuthProvider, useGetIdentity, useLogout, useTranslate} from "@refinedev/core";
import {DownOutlined, LogoutOutlined} from "@ant-design/icons";
import React from "react";

const {Text} = Typography;

interface IUser {
  username: string;
  avatar: string;
}

export const UserPanel = () => {
  const {data: user} = useGetIdentity<IUser>();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const {mutate: mutateLogout} = useLogout({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });


  const items = [
    {
      key: 'logout',
      label: translate("buttons.logout", "Logout"),
      onClick: () => mutateLogout(),
      icon: <LogoutOutlined/>
    }
  ]

  return <Dropdown menu={{items}}>

    <Space style={{marginLeft: "8px"}}>
      {user?.username && (
        <Text style={{color: "white", textTransform: "capitalize"}} strong>
          {user.username}
        </Text>
      )}
      {user?.avatar && <Avatar src={user?.avatar} alt={user?.username}/>}
      <DownOutlined style={{color: "white"}}/>
    </Space>
  </Dropdown>;

}
