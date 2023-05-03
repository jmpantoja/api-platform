import {TableData} from "@planb/components/table";
import {Table} from "antd";
import {IBook} from "@model";
import {useTranslate} from "@refinedev/core";
import {RangeFilter, TextFilter} from "@planb/components/filters";


export const BookList = () => {

  const t = useTranslate()
  return <TableData<IBook>
    resource={'bookstore/books'}
    // edit={{modal: BookForm}}
    // create={{drawer: BookForm, width: 1000}}
    filters={{
      title: <TextFilter/>,
      'price.amount': <RangeFilter/>
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

    <Table.Column
      dataIndex="title"
      width={'auto'}
      title={t('bookstore/books.columns.title')}
      sorter={true}/>

    <Table.Column
      width={200}
      dataIndex={"author"}
      title={t('bookstore/books.columns.author')}
      render={(field) => {
        return <>{field.name.firstName} {field.name.lastName}</>
      }}
    />

    <Table.Column
      width={100}
      dataIndex="price.amount"
      title={t('bookstore/books.columns.price')}
      sorter={true}
      render={(_, record: IBook) => {
        const {price} = record
        return price.currency === 'EUR' ?
          `${price.amount} €` :
          `$${price.amount}`

      }}
    />

  </TableData>
}
