import {Entity} from "@planb/definitions/entity";
import {List, Table} from "@pankod/refine-antd";

import styles from "./styles.module.less"
import {useListView, UseListViewProps} from "@planb/hooks";
import {SearchPanel} from "@planb/components/listView/SearchPanel";
import classNames from "classnames";
import FormWrapper from "@planb/components/listView/FormWrapper";

export interface ListViewProps<TData extends Entity> extends UseListViewProps<TData> {

}

export const ListView = <TData extends Entity>(props: ListViewProps<TData>) => {
  const {tableProps, searchPanelProps, isSearchable, createProps, createButtonProps, editProps} = useListView(props)
  const className = classNames(styles.listView, isSearchable && styles.listViewSearchable)

  return <>
    <div className={className}>
      <List createButtonProps={createButtonProps}>
        {isSearchable && <SearchPanel {...searchPanelProps}/>}
        <Table {...tableProps} className={styles.tableWrapper}/>
      </List>
    </div>

    <FormWrapper {...createProps}/>
    <FormWrapper {...editProps}/>
  </>
}
