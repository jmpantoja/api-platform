import {Entity} from "@planb/definitions/entity";
import React, {FC, ReactElement} from "react";
import {DrawerProps, FormInstance, ModalProps} from "@pankod/refine-antd";
import {FormProps} from "antd";
import {ColumnType} from "antd/lib/table/interface";
import {ButtonProps as AntButtonProps} from "antd/lib/button/button";


export type Action<TData> = (record: TData) => React.ReactNode;

export type ActionList<TData> = { edit?: boolean, delete?: boolean, show?: boolean } | { [key: string]: Action<TData> }

export interface ActionsColumn<TData> {
  width?: number | 'auto' | 'collapsed',
  actions?: ActionList<TData>
}

export interface ColumnInputType<TData> extends ColumnType<TData>{
  sortKey?: string
}

export type ColumnInputList<TData extends Entity> = Record<string, ColumnInputType<TData>>;

export interface SearchPanelProps {
  formProps: FormProps,
  filters: FilterItem[],
  restore: RestoreFunctionType
}

export interface FilterValue {
  query?: any;
  operator?: string;
}

export interface FilterProps {
  value?: FilterValue,
  onChange?: (value: FilterValue) => void
}

export type FilterField = ReactElement | {
  name: string
  filter: ReactElement
}

export interface FilterItem {
  dataIndex: string,
  filter: FilterField
}

export type FilterInputList = Record<string, FilterField>

export type RestoreFunctionType = (form: FormInstance) => void

export interface ButtonProps<TData> extends Omit<AntButtonProps, 'onClick'> {
  onClick?: (record?: TData) => void;
}

export interface CreateOrEditProps {
  mode: 'modal' | 'drawer'
  width?: number,
  form: FC<FormProps>
}

export interface BuildFormWrapperProps extends CreateOrEditProps {
  action: 'edit' | 'create'
}

interface FormWrapperModalProps {
  mode: 'modal',
  modalProps: ModalProps,
  formProps: FormProps,
  form: FC<FormProps>,
}

interface FormWrapperDrawerProps<TData> {
  action: 'edit' | 'create'
  mode: 'drawer',
  drawerProps: DrawerProps,
  formProps: FormProps,
  form: FC<FormProps>,
  saveButtonProps: ButtonProps<TData>
}

interface FormWrapperNoneProps {
  mode: 'none'
}


export type FormWrapperProps<TData> = FormWrapperModalProps | FormWrapperDrawerProps<TData> | FormWrapperNoneProps
