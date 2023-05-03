import React from "react";
import {Form, Input} from "antd";
import {Fieldset, FormData, FormDataProps} from "@planb/components/form";
import {useTranslate} from "@refinedev/core";

export const TagForm: React.FC<FormDataProps> = (props: FormDataProps) => {

  const t = useTranslate()
  return <FormData {...props}>
    <Fieldset legend={t('bookstore/tags.fieldsets.tag')} id={'uno'}>
      <Form.Item label={'bookstore/tags.fields.name'} name={'name'} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
    </Fieldset>
  </FormData>
};
