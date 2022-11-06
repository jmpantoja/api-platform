import React from "react";
import {BookList, TagList} from "@components/crud";
import BookForm from "@components/crud/books/form";
import {Icon} from "@components/ui";


export const resources = [
  {
    name: "bookstore/books",
    list: BookList,
    edit: () => <BookForm/>,
    create: () => <BookForm/>,
    icon: <Icon.Books/>,
    canDelete: true,
    options: {
      route: 'data/bookstore/books',
      form: BookForm
    }
  },
  {
    name: "bookstore/tags",
    list: TagList,
    icon: <Icon.Tags/>,
    canDelete: true,
    options: {
      route: 'data/bookstore/tags',
    }
  }
]
