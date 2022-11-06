import {ListView} from "@planb/components";
import {TextFilter} from "@planb/components/listView/filters";
import TagForm from "@components/crud/tags/form";
import {Table, useTable} from "@pankod/refine-antd";

export const TagList = () => {

  return (
    <ListView
      filters={{
        name: <TextFilter/>
      }}
      columns={{
        id: {
          width: 400,
        },
        name: {
          sorter: true
        }
      }}
      table={{
        expandable: {
          expandedRowRender: () => {
            return <>sss</>
          }
        }
      }}
      create={{
        mode: 'modal',
        form: TagForm
      }}
      edit={{
        mode: 'modal',
        form: TagForm
      }}
    />
  )
}
