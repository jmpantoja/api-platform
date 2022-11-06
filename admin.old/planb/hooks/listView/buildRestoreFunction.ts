import {TableProps} from "antd";
import {FormInstance} from "@pankod/refine-antd";
import {useEditableTableReturnType} from "@pankod/refine-antd/src/hooks/table/useEditableTable/useEditableTable";
import {RestoreFunctionType} from "@planb/definitions/listView";

interface BuildRestoreFunctionsProps {
  tableProps: TableProps<any>,
  setFilters: useEditableTableReturnType["setFilters"],
}

export const buildRestoreFunction = ({tableProps, setFilters}: BuildRestoreFunctionsProps): RestoreFunctionType => {
  return (form: FormInstance) => {

    form.resetFields()
    // @ts-ignore
    tableProps.onChange({current: 1})
    setFilters([], 'replace')
  }
}
