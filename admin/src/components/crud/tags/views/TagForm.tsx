import React from "react";
import {Form, Input} from "antd";
import {Fieldset, FormData, FormDataProps} from "@planb/components/form";
import {useTranslate} from "@refinedev/core";

export const TagForm: React.FC<FormDataProps> = (props: FormDataProps) => {
  const t = useTranslate()

  const merged = ('modalProps' in props && typeof props.modalProps === 'object') ? {
    ...props,
    modalProps:{
      ...props.modalProps,
      width: '500px'
    }
  } : props;

  return <FormData {...merged} >
    <Fieldset legend={t('bookstore/tags.fieldsets.tag')} id={'uno'}>
      <Form.Item label={t('bookstore/tags.fields.name')} name={'name'} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
    </Fieldset>
  </FormData>
};
