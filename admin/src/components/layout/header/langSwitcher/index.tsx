import {Avatar, Button, Dropdown, MenuProps, Space, Typography} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {useGetLocale, useTranslate} from "@refinedev/core";
import Link from "next/link";
import {useRouter} from "next/router";

const {Text} = Typography;


export const LangSwitcher = () => {
  const locale = useGetLocale();
  const {locales} = useRouter();
  const currentLocale = locale();
  const translate = useTranslate()

  const items: MenuProps['items'] = [...(locales || [])].sort().map((lang: string) => {
    return {
      key: lang,
      label: <Link href="/" locale={lang}>
        {translate(`locale.${lang}`)}
      </Link>,
      icon: <span style={{marginRight: 8}}>
        <Avatar size={16} src={`/admin/images/flags/${lang}.svg`}/>
      </span>
    }
  })

  return <Dropdown menu={{items}}>
    <Button type="link">
      <Space>
        <Avatar size={16} src={`/admin/images/flags/${currentLocale}.svg`}/>
        <Text style={{color: "white"}} strong>
          {translate(`locale.${currentLocale}`)}
        </Text>
        <DownOutlined style={{color: "white"}}/>
      </Space>
    </Button>
  </Dropdown>;
}
