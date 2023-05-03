import React from "react";
import {BookList} from "@components/crud/books";


export default function Dashboard() {

  return <>

    <div style={{width: '1000px', height: '500px', border: 'solid 3px red'}}>

      <BookList/>
      {/*<BookForm {...props}/>*/}

      {/*<BookEdit id={'01841e4b-eb6a-6342-1e7c-127845ce7ed6'}/>*/}
    </div>
  </>
}
