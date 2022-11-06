import React from "react";
import BookForm from "@components/crud/books/form";


const Dashboard = () => {

  return <>
    <BookForm />
  </>

  // const {show, FormView} = useFormData({
  //   resource: 'bookstore/books',
  //   action: 'edit',
  //   id: '01841e4b-eb68-9aff-d21b-76b2e7bcba99',
  //   wrapper: 'modal'
  // })
  //
  // return (
  //   <>
  //     <a onClick={() => {
  //       show()
  //     }}>asdadd</a>
  //     <FormView/>
  //   </>
  // )
}

export default React.memo(Dashboard, () => true);
