import React from "react";
import {Button, Col, Form, Input, Row, Space, Tag} from "antd";
import {Fieldset, FormData, FormDataProps, Toc} from "@planb/components/form";
import {useTranslate} from "@refinedev/core";
import {AuthorSelect,} from "@components/crud/authors";
import {PriceRule, PriceInput} from "@components/form";
import {TagSelect} from "@components/crud/tags/fields/TagSelect";


const Info = () => {
  const t = useTranslate()
  return <Row>
    <Col span={12} offset={6}>
      <Fieldset legend={t('bookstore/books.fieldsets.data')} id={'datos-1'}>
        <Form.Item label={t('bookstore/books.fields.id')} name={'id'} rules={[{required: true}]}>
          <Input readOnly disabled/>
        </Form.Item>
        <Form.Item label={t('bookstore/books.fields.title')} name={'title'} rules={[{required: true}]}
                   wrapperCol={{span: 12}}>
          <Input/>
        </Form.Item>
        <Form.Item label={t('bookstore/books.fields.price')} name={'price'}
                   rules={[{required: true}, {validator: PriceRule}]}>
          <PriceInput/>
        </Form.Item>

        <Form.Item label={t('bookstore/books.fields.author')} name={'author'} rules={[{required: true}]}>
          <AuthorSelect/>
        </Form.Item>

        <Form.Item label={t('bookstore/books.fields.tags')} name={'tags'}>
          <TagSelect/>
        </Form.Item>

        <Form.Item label={t('bookstore/books.fields.summary')} name={'summary'} rules={[{required: true}]}>
          <Input.TextArea rows={10}/>
        </Form.Item>

      </Fieldset>
    </Col>
  </Row>
}

const Tab1 = () => {
  const t = useTranslate()
  return <Toc>
    <Fieldset legend={t('bookstore/books.fieldsets.data')} id={'datos-1'}>
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

    <Fieldset legend={t('bookstore/books.fieldsets.metadata')} id={'meta-1'}>
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
  const t = useTranslate()
  return <Row>
    <Col flex={1}>
      <Fieldset legend={t('bookstore/books.fieldsets.data')} id={'datos-2'}>
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
  const t = useTranslate()
  return <Row>
    <Col span={12} offset={6}>
      <Fieldset legend={t('bookstore/books.fieldsets.metadata')} id={'meta-3'}>
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


export const BookForm: React.FC<FormDataProps> = (props: FormDataProps) => {

  return <FormData
    {...props}>
    {Info()}
    {/*<Tabs type='card' items={[*/}
    {/*  tab({*/}
    {/*    label: 'UNO',*/}
    {/*    children: Tab1()*/}
    {/*  }),*/}
    {/*  tab({*/}
    {/*    label: 'DOS',*/}
    {/*    children: Tab2()*/}
    {/*  }),*/}
    {/*  tab({*/}
    {/*    label: 'TRES',*/}
    {/*    children: Tab3()*/}
    {/*  })*/}
    {/*]}*/}
    {/*/>*/}
  </FormData>

};
