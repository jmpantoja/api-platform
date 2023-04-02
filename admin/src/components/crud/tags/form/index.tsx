import React from "react";
import {Col, Form, FormProps, Input, Row, Tabs} from "antd";
import {Edit} from "@refinedev/antd";
import {FormLayout, FormLayoutProps, useFormContext} from "@planb/components/form/formLayout";
import {Fieldset} from "@planb/components/form/fieldset";
import {Toc} from "@planb/components/form/toc";
import {tab} from "@planb/components/form/tabs";
import {useTranslate} from "@refinedev/core";
import {useTranslation} from "next-i18next";

const Tab1 = () => {
  const t = useTranslate()
  return <Toc>
    <Fieldset legend='Datos' id={'datos-1'}>
      <Form.Item label={t('bookstore/books.fields.id')} name={'id'} rules={[{required: true}]}>
        <Input readOnly disabled/>
      </Form.Item>
      <Form.Item label={t('bookstore/books.fields.title')} name={'title'} rules={[{required: true}]}
                 wrapperCol={{span: 12}}>
        <Input/>
      </Form.Item>
      <Form.Item label={t('bookstore/books.fields.summary')} name={'summary'} rules={[{required: true}]}>
        <Input.TextArea rows={10}/>
      </Form.Item>
    </Fieldset>
    <Fieldset legend='MetaData' id={'meta-1'}>
      <Form.Item label={t('bookstore/books.fields.@id')} name={'@id'} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
      <Form.Item label={t('bookstore/books.fields.@context')} name={'@context'} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
      <Form.Item label={t('bookstore/books.fields.@type')} name={'@type'} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
    </Fieldset>
  </Toc>
}


const Tab2 = () => {
  return <Row>
    <Col flex={1}>
      <Fieldset legend='Datos' id={'datos-2'}>
        <Form.Item label={'id'} name={'id'} rules={[{required: true}]}>
          <Input readOnly disabled/>
        </Form.Item>
        <Form.Item label={'title'} name={'title'} rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'summary'} name={'summary'} rules={[{required: true}]}>
          <Input/>
        </Form.Item>
      </Fieldset>
    </Col>
  </Row>
}

const Tab3 = () => {
  return <Row>
    <Col span={12} offset={6}>
      <Fieldset legend='MetaData' id={'meta-3'}>
        <Form.Item label={'@id'} name={'@id'} rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'@context'} name={'@context'} rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item label={'@type'} name={'@type'} rules={[{required: true}]}>
          <Input/>
        </Form.Item>
      </Fieldset>
    </Col>
  </Row>
}


export const TagForm: React.FC<FormLayoutProps> = (props: FormLayoutProps) => {

  const t = useTranslate()

  return <FormLayout {...props}>
    <Fieldset legend={t('bookstore/tags.fieldsets.tag')} id={'uno'}>
      <Form.Item label={'bookstore/tags.fields.name'} name={'name'} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
    </Fieldset>

  </FormLayout>

};
