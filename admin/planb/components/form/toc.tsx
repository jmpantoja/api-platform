import {Children, isValidElement, ReactElement, ReactNode} from "react";
import {Anchor, AnchorProps, Col, Row} from "antd";
import css from '@planb/components/form/style.module.less'
import {useErrorBag} from "@planb/components/form";
import {AnchorLinkItemProps} from "antd/es/anchor/Anchor";
import {ReactNodeArray} from "prop-types";
import {nodeTree} from "@planb/components/form/errorBag";
import {useFormContext} from "@planb/components/form/formLayout";

interface TocProps {
  children: ReactNode | ReactNode[] | ReactNodeArray
}

export const Toc = ({children}: TocProps) => {

  const {errorFieldsets} = useErrorBag()
  const {action, like} = useFormContext()

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
    affix: true,
    getContainer: () => (document.querySelector(`.${css.toc} .anchor-container`) as HTMLElement),
    offsetTop: 10,
    targetOffset: 30,
    showInkInFixed: true,
    items
  }

  const lg = like === 'view' ? 12 : 18

  return <Row className={css.toc}>
    <Col className={'anchor-links'} sm={24} md={6}>
      {hasToc && <Anchor {...anchorProps}/>}
    </Col>
    <Col className={'anchor-container'} sm={24} md={18} lg={lg}>
      {children}
    </Col>
  </Row>
}
