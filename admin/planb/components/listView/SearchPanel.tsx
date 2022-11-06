import {useResource, useTranslate} from "@pankod/refine-core";
import {Icon} from "@components/ui";
import {Button, Card} from "antd";
import styles from "./styles.module.less"
import {Form} from "@pankod/refine-antd";
import {FilterItem, SearchPanelProps as SearchPanelPropsInterface} from "@planb/definitions/listView";
import React, {ReactElement} from "react";

const Title = ({title}: { title: string }) => {
  const t = useTranslate()
  return <div className='search-form-title'>
    <Icon.Search style={{verticalAlign: "top"}}/>
    <span style={{verticalAlign: "top"}}>{t(title)}</span>
  </div>
}

const SearchButton = () => {
  const t = useTranslate()
  return <Button htmlType="submit" type="primary" size="large">
    {t('buttons.search')}
  </Button>;
}

const ResetButton = ({onClick}: { onClick: () => void }) => {
  const t = useTranslate()
  return <Button size="large" onClick={onClick}>
    {t('buttons.restore')}
  </Button>;
}


interface SearchPanelProps extends SearchPanelPropsInterface {

}


interface UseFilterReturnType {
  name: string,
  input: ReactElement,
}

const getFilter = ({dataIndex, filter}: FilterItem): UseFilterReturnType => {
  const input = 'filter' in filter ? filter.filter : filter
  const name = 'name' in filter ? filter.name : dataIndex

  return {
    name,
    input
  }
}

export const SearchPanel = ({formProps, filters, restore}: SearchPanelProps) => {
  const t = useTranslate()
  const {resourceName} = useResource()
  const [form] = Form.useForm();

  return <Card title={<Title title={t('actions.search')}/>} className={styles.searchPanel}>

    <Form {...formProps}
          layout={"vertical"}
          className="search-form"
          form={form}>

      <div className="search-panel-items">
        {filters.map(({dataIndex, filter}) => {

          const {name, input} = getFilter({dataIndex, filter})

          return <Form.Item name={name} key={dataIndex} label={t(`${resourceName}.fields.${dataIndex}`)}>
            {input}
          </Form.Item>
        })}
      </div>

      <div className="search-panel-actions">
        <Form.Item>
          <ResetButton onClick={() => restore(form)}/>
          <SearchButton/>
        </Form.Item>
      </div>


    </Form>
  </Card>;
}
