import React, {isValidElement, ReactNode} from "react";
import {FormProps} from "antd";

export type ChildrenLike = ReactNode | ReactNode[] | FormProps['children']

const nodeHasProps = (node: ReactNode, propNames: string[]): boolean => {
  if (!isValidElement(node)) {
    return false
  }

  const props = Object.keys(node?.props ?? {})
  return propNames.every(key => props.includes(key))
}

export const isTab = (node: ReactNode) => {
  return nodeHasProps(node, ['items'])
}

export const isFieldset = (node: ReactNode) => {
  return nodeHasProps(node, ['legend', 'id'])
}

export const isFormItem = (node: ReactNode) => {
  return nodeHasProps(node, ['label', 'name'])
}
