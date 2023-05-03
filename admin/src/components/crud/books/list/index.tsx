import {TableData} from "@planb/components/table";
import {Input, Table} from "antd";
import {MarkdownField} from "@refinedev/antd";
import {BookForm} from "@components/crud/books/form";
import {IBook} from "@model";
import {TextFilter} from "@planb/components/filters/TextFilter";

export const BookList = () => {

  return <TableData<IBook>
    resource={'bookstore/books'}
    edit={{modal: BookForm}}
    create={{drawer: BookForm, width: 1000}}
    filters={{
      title: <TextFilter/>
    }}
    filtersDefaultValues={{
      // title: {
      //   operator: 'partial',
      //   value: null
      // }
    }}

    pagination={{
      pageSize: 15
    }}
    tableProps={{
      expandable: {
        expandedRowRender: (record) => {
          return record.summary
        }
      }
    }}
  >
    {/*<Table.Column dataIndex="id" title="Id"/>*/}
    <Table.Column
      dataIndex={"author"}
      title="Author"
      render={(field) => {
        return <>{field.name.firstName} {field.name.lastName}</>
      }
      }
    />
    <Table.Column dataIndex="title" title="Title"/>

    <Table.Column
      dataIndex="price"
      title="Price"
      render={(value: any) => (
        value.amount
      )}
    />

    <Table.Column
      dataIndex="summary"
      title="Summary"
      ellipsis={true}
      render={(value: any) => (
        <MarkdownField value={value.slice(0, 80) + "..."}/>
      )}
    />
  </TableData>
}
