import {EditProps} from "@pankod/refine-antd/dist/components/crud/edit";
import {DeleteButtonProps} from "@pankod/refine-antd";
import {SaveButtonProps} from "@pankod/refine-antd/dist/components/buttons/save";
import {ErrorBag} from "@planb/context/errorBag";

interface BuildEditProps {
  saveButtonProps: SaveButtonProps,
  errorBag: ErrorBag
}

export const buildEdit = ({saveButtonProps: saveProps, errorBag}: BuildEditProps): EditProps => {

  const saveButtonProps = {
    ...saveProps,
    icon: null,
    size: "large",
    disabled: errorBag.isNotEmpty
  }

  const deleteButtonProps: DeleteButtonProps = {
    icon: null,
    invalidates: ["all"],
    size: "large"
  }

  return {
    goBack: false,
    breadcrumb: null,
    headerButtons: [],
    saveButtonProps: saveButtonProps,
    deleteButtonProps: deleteButtonProps,
  }
}
