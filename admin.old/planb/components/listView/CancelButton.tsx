import {useEditableTableReturnType} from "@pankod/refine-antd/src/hooks/table/useEditableTable/useEditableTable";
import {Button} from "@pankod/refine-antd";
import {useTranslate} from "@pankod/refine-core";

type CancelButtonProps = useEditableTableReturnType['cancelButtonProps']

const CancelButton = (props: CancelButtonProps) => {
  const t = useTranslate()
  return <Button {...props} >{t('buttons.cancel')}</Button>
}

export default CancelButton
