import {BaseKey, BaseRecord} from "@refinedev/core";

export const buttonProps = (show?: (id?: BaseKey) => void, record?: BaseRecord) => {
  if (show === undefined) {
    return {}
  }

  const id = record ? record.id : undefined
  return {
    onClick: () => {
      show(id)
    }
  }
}
