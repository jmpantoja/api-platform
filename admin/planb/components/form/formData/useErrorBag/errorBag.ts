import {ChildrenLike} from "../../nodeTree/utils";
import {itemsMap} from "@planb/components/form/formData/useErrorBag/itemsMap";
import {useMemo, useState} from "react";
import {FieldData} from "rc-field-form/es/interface";
import {isEqual} from "lodash";

interface Ancestors {
  tabs: string[]
  fieldsets: string[]
}

interface FieldsMap {
  [key: string]: Ancestors
}

export interface ErrorBag {
  update: (fields: FieldData[]) => void
  errorFieldsets: { [key: string]: boolean }
  errorTabs: { [key: string]: boolean }
  isValid: boolean
}


const unique = (values: string[]) => {
  return values.filter((item, index, all) => {
    return all.indexOf(item) === index
  })
}

const build = (fields: string[], map: FieldsMap, type: 'fieldsets' | 'tabs') => {
  const all = unique(Object.values(map).flatMap((item) => {
    return item[type]
  }))

  const withError = unique(fields.flatMap((item) => {
    return map[item][type]
  }))

  return all.reduce((carry, item) => {
    return {...carry, [item]: withError.includes(item)}
  }, {})
}

export const createErrorBag = (children: ChildrenLike): ErrorBag => {
  const [fields, updateFields] = useState<string[]>([])
  const map = itemsMap(children)

  const update = (allFields: FieldData[]) => {
    const fieldsWithErrors = allFields.filter((field) => {
      return (field.errors?.length as number) > 0
    }).flatMap((field) => {
      return field.name as string
    })

    updateFields((prevState) => {
      if (isEqual(prevState.sort(), fieldsWithErrors.sort())) {
        return prevState
      }
      return fieldsWithErrors
    })
  }

  const fieldsets = useMemo(() => {
    return build(fields, map, 'fieldsets')
  }, [fields])

  const tabs = useMemo(() => {
    return build(fields, map, 'tabs')
  }, [fields])

  const isValid = useMemo(() => {
    return fields.length === 0
  }, [fields])

  return {
    update,
    errorFieldsets: fieldsets,
    errorTabs: tabs,
    isValid
  }
}

