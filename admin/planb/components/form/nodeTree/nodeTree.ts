import {isValidElement, ReactElement, ReactNode} from "react";
import {Tab} from "rc-tabs/lib/interface";
import {FormItemProps} from "antd/es/form/FormItem";
import {FieldsetProps} from "@planb/components/form";
import {ChildrenLike, isFieldset, isFormItem, isTab} from "./utils";


type FilterCallback = (node: ReactNode) => boolean

const find = (children: ChildrenLike, callback: FilterCallback, deep: boolean): ReactElement[] => {

  const elements = (children instanceof Array ? children : [children])
    .filter((item) => isValidElement(item)) as ReactElement[]

  if (!deep) {
    return elements.filter(callback)
  }

  return elements.flatMap((node) => {
    if (callback(node)) {
      return node
    }

    if (isTab(node)) {
      return node.props.items.flatMap((tab: Tab) => {
        return find(tab.children ?? [], callback, deep)
      })
    }

    return find(node.props.children, callback, deep)
  })
}


type TabCallback = (props: Tab, index: number, node: ReactElement) => any
type FieldsetCallback = (props: FieldsetProps, index: number, node: ReactElement) => any
type FormItemCallback = (props: FormItemProps, index: number, node: ReactElement) => any

interface NodeTreeProps {
  children: ChildrenLike
  deep?: boolean
}

export const nodeTree = ({children, deep = true}: NodeTreeProps) => {
  return {
    tabs: (callback?: TabCallback): any[] => {
      const items = find(children, isTab, deep);
      const tabs = items.flatMap((tabs) => {
        return tabs.props.items.flatMap((tab: Tab) => {
          return tab
        })
      })

      return callback ? tabs.map((node, index) => {
        return callback(node, index, node)
      }) : tabs

    },
    fieldsets: (callback?: FieldsetCallback): any[] => {
      const items = find(children, isFieldset, deep);
      return callback ? items.map((node, index) => {
        return callback(node.props, index, node)
      }) : items
    },
    formItems: (callback?: FormItemCallback): any[] => {
      const items = find(children, isFormItem, deep);
      return callback ? items.map((node, index) => {
        return callback(node.props, index, node)
      }) : items
    },
  }
}


