import {FormProps} from "antd";
import {Form, Input} from "@pankod/refine-antd";
import {useTranslate} from "@pankod/refine-core";
import AuthorSelect from "@components/input/AuthorSelect";
import PriceInput, {PriceRule} from "@components/input/PriceInput";
import React from "react";
import {Money} from "~/interfaces";
import Fieldset from "@planb/components/formView/fieldset";


const BookForm = (props: FormProps) => {
  const t = useTranslate()

  return <Form {...props}
               layout={'horizontal'}
               labelCol={{
                 span: 3,
               }}>

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

  </Form>;
}


export default BookForm
