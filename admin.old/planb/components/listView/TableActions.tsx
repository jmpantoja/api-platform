import {Entity} from "@planb/definitions/entity";
import {IResourceItem} from "@pankod/refine-core";
import {DeleteButton, EditButton, ShowButton} from "@pankod/refine-antd";

import styles from "./styles.module.less"
import {ActionsColumn, ButtonProps} from "@planb/definitions/listView";
import React from "react";
import {buildButtons} from "@planb/hooks/listView/buildActionButtons";
import {EditButtonProps} from "@pankod/refine-antd/dist/components/buttons/edit";

interface TableActionsProps<TData extends Entity> {
  actions?: ActionsColumn<TData>,
  resource: IResourceItem,
  record: TData,
  editButtonProps: ButtonProps<TData>,
  isEditable: boolean
}

function buildOnClick<TData>({onClick}: ButtonProps<TData>, record: TData) {
  if (!onClick) {
    return undefined
  }

  const handler: EditButtonProps['onClick'] = (event) => {
    event.preventDefault()
    onClick(record)
  }
  return handler
}

function TableActions<TData extends Entity>(props: TableActionsProps<TData>) {

  const {
    actions,
    resource,
    record,
    editButtonProps,
    isEditable
  } = props

  const {canDelete, canShow, canEdit} = resource

  const editButton = {
    ...editButtonProps,
    onClick: buildOnClick(editButtonProps, record)
  }

  delete editButton['icon']

  const buttons = buildButtons({
    edit: (record: TData) => <EditButton {...editButton} type={'link'} size="small" recordItemId={record.id}/>,
    show: (record: TData) => <ShowButton type={'link'} size="small" recordItemId={record.id}/>,
    delete: (record: TData) => <DeleteButton type={'link'} size="small" recordItemId={record.id}/>,

    canEdit: canEdit as boolean || isEditable,
    canDelete: canDelete as boolean,
    canShow: canShow as boolean,
    actions: actions?.actions
  })

  return <div className={styles.actionButtons}>
    {buttons.map((button, index) => {
      return <React.Fragment key={index}>
        {button(record)}
      </React.Fragment>
    })}
  </div>

}

export default TableActions
