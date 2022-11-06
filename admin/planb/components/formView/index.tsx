import {Entity} from "@planb/definitions/entity";
import {Anchor, FormProps} from "antd";
import {Edit} from "@pankod/refine-antd";
import styles from "./styles.module.less";
import React from "react";
import {useFormView} from "@planb/hooks/formView";
import {ErrorBagContext} from "@planb/context/errorBag";

interface EditViewProps<TData> {
  form: (props: FormProps) => JSX.Element
}

export const FormView = <TData extends Entity>({form}: EditViewProps<TData>) => {

  const {anchorProps, editProps, Form, links, errorBag} = useFormView({form})

  return <div className={styles.editView}>

    <ErrorBagContext.Provider
      value={errorBag}
    >
      <Anchor {...anchorProps}>
        {links.map((linkProps, index) => {
          return <Anchor.Link {...linkProps} key={index}/>
        })}
      </Anchor>
      <Edit {...editProps}>
        {Form}
      </Edit>
    </ErrorBagContext.Provider>
  </div>
}
