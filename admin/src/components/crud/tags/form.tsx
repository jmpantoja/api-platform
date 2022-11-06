import {FormProps} from "antd";
import {Form, Input} from "@pankod/refine-antd";
import {useTranslate} from "@pankod/refine-core";

const TagForm = (props: FormProps) => {
  const t = useTranslate()

  return <Form {...props} layout="vertical">
    <Form.Item
      label={t('bookstore/tags.fields.name')}
      name="name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input/>
    </Form.Item>
  </Form>;
}

export default TagForm
