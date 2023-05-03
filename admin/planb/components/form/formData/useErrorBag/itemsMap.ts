import {nodeTree} from "@planb/components/form/nodeTree/nodeTree";
import {ReactNode} from "react";
import {FormProps} from "antd";


type ChildrenLike = ReactNode | ReactNode[] | FormProps['children']

interface Ancestors {
  tabs: string[]
  fieldsets: string[]
}

const EmptyAncestors: Ancestors = {
  tabs: [],
  fieldsets: []
}

interface FieldsMap {
  [key: string]: Ancestors
}

export const itemsMap = (children: ChildrenLike): FieldsMap => {
  const map: FieldsMap = {}

  nodeTree({children})
    .tabs((props, index, node) => {
      nodeTree({children: props.children})
        .formItems((item) => item.name)
        .forEach((name: string) => {
          const prev: Ancestors = map[name] ?? EmptyAncestors
          map[name] = {
            tabs: [...prev.tabs, props.key],
            fieldsets: prev.fieldsets,
          }
        })
    })

  nodeTree({children})
    .fieldsets((props, index, node) => {
      nodeTree({children: props.children})
        .formItems((item) => item.name)
        .forEach((name: string) => {
          const prev: Ancestors = map[name] ?? EmptyAncestors
          map[name] = {
            tabs: prev.tabs,
            fieldsets: [...prev.fieldsets, props.id],
          }
        })
    })

  return map
}
