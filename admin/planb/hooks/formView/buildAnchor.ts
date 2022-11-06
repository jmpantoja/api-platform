import {AnchorProps} from "@pankod/refine-antd";

interface BuildAnchorProps {

}

export const buildAnchor = (props?: BuildAnchorProps): AnchorProps => {
  return {
    affix: false,
    getContainer: () => (document.getElementsByClassName('ant-card-body')[0] as HTMLElement),
    showInkInFixed: true
  }
}
