import {ReactNode} from "react";
import {Anchor, AnchorProps, Col, Row} from "antd";
import css from './style.module.less'
import {useErrorBag} from "@planb/components/form";
import {AnchorLinkItemProps} from "antd/es/anchor/Anchor";
import {ReactNodeArray} from "prop-types";

import {nodeTree} from "@planb/components/form/nodeTree";
import {useFormContext} from "@planb/components/form/formData/useFormContext";
import classNames from "classnames";


interface TocProps {
  children: ReactNode | ReactNode[] | ReactNodeArray
}

export const Toc = ({children}: TocProps) => {

  const {errorFieldsets} = useErrorBag()
  const {like} = useFormContext()

  const items: AnchorLinkItemProps[] = nodeTree({children})
    .fieldsets((props, index, node) => {
      return {
        title: props.legend,
        key: index,
        href: `#${props.id}`,
        className: errorFieldsets[props.id] ? 'error' : undefined
      }
    })

  const hasToc = items.length > 0
  const anchorProps: AnchorProps = {
    affix: false,
    getContainer: () => (document.querySelector(`.${css.toc} .anchor-container`) as HTMLElement),
    offsetTop: 10,
    targetOffset: 50,
    showInkInFixed: true,
    items
  }

  const lg = like === 'view' ? 12 : 18
  const className = classNames(css.toc, 'toc')

  return <Row className={className}>
    <Col className={'anchor-links'} sm={24} md={6}>
      {hasToc && <Anchor {...anchorProps}/>}
    </Col>
    <Col className={'anchor-container'} sm={24} md={18} lg={lg}>
      {children}
    </Col>
  </Row>
}
