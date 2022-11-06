import {ListView} from "@planb/components";
import {TextFilter, NumberFilter} from "@planb/components/listView/filters";
import BookForm from "@components/crud/books/form";
import React from "react";


export const BookList = () => {

  return (
    <ListView
      filters={{
        title: <TextFilter/>,
        price: {
          name: 'price.amount',
          filter: <NumberFilter/>
        }
      }}
      table={{
        expandable: {
          expandedRowRender: (record) => {
            return <>{record.summary}</>
          }
        }
      }}
      columns={{
        id:{},
        title: {
          sorter: true,
          ellipsis: {
            showTitle: true,
          },
        },
        author: {
          sorter: true,
          render: (value) => {
            const {name} = value
            return <>{name.lastName}, {name.firstName}</>
          }
        },
        price: {
          sorter: true,
          sortKey: 'price.amount',
          render: (value) => {
            return <>{value.amount} {value.currency === 'EUR' ? '€' : '$'}</>
          }
        }
      }}
    />
  )
}
