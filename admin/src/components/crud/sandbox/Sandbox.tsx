import {useModal} from "sunflower-antd";
import {Modal} from "antd";

export type Handler = () => void

interface SandboxProps {
  title: string
  show?: Handler
}

export const Sandbox = ({title, show}: SandboxProps) => {
  const {show: modal, modalProps} = useModal({
    defaultVisible: false,
  })

  show = modal

  return <Modal {...modalProps}>
    {title}
  </Modal>
}

