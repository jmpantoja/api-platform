import React from "react";
import {BookEdit, BookList} from "@components/crud/books";
import {useFormData} from "@planb/components/form";
import {BookForm} from "@components/crud/books/form";
import {Button} from "antd";


export default function Dashboard() {

  return <>

    <div style={{width: '1000px', height: '500px', border: 'solid 3px red'}}>

      <BookList/>
      {/*<BookForm {...props}/>*/}

      {/*<BookEdit id={'01841e4b-eb6a-6342-1e7c-127845ce7ed6'}/>*/}
    </div>
  </>
}
