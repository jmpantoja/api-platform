import React from "react";
import {Table} from "antd";
import {TableData} from "@planb/components/table";
import {TagForm} from "@components/crud/tags";
import {TextFilter} from "@planb/components/filters/TextFilter/TextFilter";
import {useTranslate} from "@refinedev/core";

export const TagList = () => {
  const t = useTranslate()
  return <TableData
    resource={'bookstore/tags'}
    filters={{
      name: <TextFilter/>
    }}
    edit={{modal: TagForm, width: 500}}
    create={{drawer: TagForm}}
  >
    <Table.Column
      width={'auto'}
      className={'main'}
      dataIndex="name"
      title={t('bookstore/tags.columns.name')}
    />
  </TableData>
}
