import {Entity} from "@planb/definitions/entity";
import {Anchor} from "antd";
import {Edit, useForm} from "@pankod/refine-antd";
import styles from "./styles.module.less";
import React, {ReactNode} from "react";
import {useFormView} from "@planb/hooks/formView";
import {ErrorBagContext} from "@planb/context/errorBag";
import {buildForm} from "@planb/hooks/formView/buildForm";

interface EditViewProps<TData> {
  // form: (props: FormProps) => JSX.Element
  children: ReactNode
}

export const FormView = <TData extends Entity>({children}: EditViewProps<TData>) => {

  const {formProps, saveButtonProps, form: formInstance} = useForm<TData>();

  console.log(children)




  return <>ss</>

  // const {anchorProps, editProps, Form, links, errorBag} = useFormView({form})
  //
  // return <div className={styles.editView}>
  //
  //   <ErrorBagContext.Provider
  //     value={errorBag}
  //   >
  //     <Anchor {...anchorProps}>
  //       {links.map((linkProps, index) => {
  //         return <Anchor.Link {...linkProps} key={index}/>
  //       })}
  //     </Anchor>
  //     <Edit {...editProps}>
  //       {Form}
  //     </Edit>
  //   </ErrorBagContext.Provider>
  // </div>
}
