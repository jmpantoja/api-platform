import {TableData} from "@planb/components/table";
import {Table} from "antd";
import {IAuthor, IBook} from "@model";
import {useTranslate} from "@refinedev/core";
import {RangeFilter, TextFilter} from "@planb/components/filters";


export const AuthorList = () => {

  const t = useTranslate()
  return <TableData<IAuthor>
    resource={'bookstore/authors'}
    // // edit={{modal: BookForm}}
    // // create={{drawer: BookForm, width: 1000}}
    filters={{
      'name.firstName': <TextFilter/>,
    }}

    pagination={{
      pageSize: 15
    }}
  >
    <Table.Column
      width={'auto'}
      dataIndex={"name"}
      title={t('bookstore/authors.columns.name')}
      render={(field) => {
        return <>{field.firstName} {field.lastName}</>
      }
      }
    />


  </TableData>
}
