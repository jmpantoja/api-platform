import {Filter} from './filter';
import React from 'react';
import {Input} from "@pankod/refine-antd";

import {useTranslate} from "@pankod/refine-core";
import {FilterProps} from "@planb/definitions/listView";

export const TextFilter = ({value = {}, onChange}: FilterProps) => {
  const t = useTranslate()

  return (
    <Filter
      value={value}
      onChange={onChange}
      operators={{
        partial: t('filters.operators.partial'),
        exact: t('filters.operators.exact'),
        start: t('filters.operators.start'),
        end: t('filters.operators.end')
      }}
      field={Input}
    />
  );
};
