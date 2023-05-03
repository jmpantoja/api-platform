import {Space, Table} from "antd";
import {BaseKey, BaseRecord} from "@refinedev/core";
import React, {Fragment} from "react";
import {ActionList} from "@planb/components/table/tableData/types";
import css from '../style.module.less'
import {resolveActions} from "./resolveActions";


interface TableActionsProps {
  resource: string
  actions?: ActionList
  show?: (id?: BaseKey) => void
}

export const ColumnActions = (props: TableActionsProps) => {
  const actions = resolveActions(props)

  const width = 5 + Object.values(actions).length * 70

  return <Table.Column
    dataIndex="__actions"
    className={css.actionsColumn}
    width={width}
    render={(text, record: BaseRecord) => (
      <Space>
        {Object.values(actions).map((action, index) => {
          return <Fragment key={index}>
            {action({record})}
          </Fragment>
        })}
      </Space>
    )
    }
  />
}
