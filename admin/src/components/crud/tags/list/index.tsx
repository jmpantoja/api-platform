import React from "react";
import {BaseKey, BaseRecord} from "@refinedev/core";
import {DeleteButton, EditButton, List, ShowButton, useTable} from "@refinedev/antd";
import {Space, Table} from "antd";
import {useFormLayout} from "@planb/components/form/useFormLayout";
import {TagForm} from "@components/crud/tags/form";
import {ITag} from "../../../../interfaces";


export const TagList = () => {
  const {tableProps} = useTable({
    syncWithLocation: true,
  });

  const {show, ...props} = useFormLayout({
    like: 'modal',
    action: "edit"
  })

  return <>
    <List createButtonProps={{
      icon: false
    }}>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="Name" render={(_, record: ITag) => {
          return <b>{record.name}</b>
        }}/>

        {/*<TableActions actions={{edit: true, delete: true, otro: <>otro boton</>}}>*/}
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                // hideText
                icon={false}
                size="small"
                recordItemId={record.id}
                onClick={() => show(record.id)}
              />
              <DeleteButton
                size="small"
                icon={false}
                recordItemId={record.id}
              />
            </Space>
          )}
        />
      </Table>
    </List>

    <TagForm {...props}/>
  </>

}


