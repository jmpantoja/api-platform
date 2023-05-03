import React from "react";
import {Button, Table} from "antd";
import {TableData} from "@planb/components/table";
import {TagForm} from "@components/crud/tags/form";

export const TagList = () => {

  return <TableData
    resource={'bookstore/tags'}
    pageSize={12}
    edit={{modal: TagForm, width: 500}}
    create={{drawer: TagForm}}
  >
    <Table.Column
      width={'500px'}
      dataIndex="@id"
      title="id"
    />

    <Table.Column
      width={'auto'}
      className={'main'}
      dataIndex="name"
      title="Name"
    />
  </TableData>
}
