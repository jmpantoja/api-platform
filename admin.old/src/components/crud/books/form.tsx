import {FormProps} from "antd";
import {Form, Input} from "@pankod/refine-antd";
import {useTranslate} from "@pankod/refine-core";
import AuthorSelect from "@components/input/AuthorSelect";
import PriceInput, {PriceRule} from "@components/input/PriceInput";
import React from "react";
import Fieldset from "@planb/components/formView/fieldset";
import {FormData, FormDataProps} from "@planb/components";


const BookForm = (props: FormDataProps) => {
  const t = useTranslate()

  return <FormData {...props} resource={'bookstore/books'} >

    <Fieldset label="uno">
      <Form.Item
        label={t('bookstore/books.fields.title')}
        name="title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label={t('bookstore/books.fields.author')}
        name="author"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <AuthorSelect/>
      </Form.Item>
    </Fieldset>

    <Fieldset label="dos">

      <Form.Item
        label={t('bookstore/books.fields.price')}
        name="price"
        rules={[
          {required: true},
          {
            validator: PriceRule
          },
        ]}
      >
        <PriceInput/>
      </Form.Item>

    </Fieldset>

    <Fieldset label="tres">
      <Form.Item
        label={t('bookstore/books.fields.summary')}
        name="summary"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>
    </Fieldset>

  </FormData>;
}


export default BookForm
