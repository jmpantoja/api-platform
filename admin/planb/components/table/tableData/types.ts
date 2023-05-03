import {BaseKey, BaseRecord} from "@refinedev/core";
import {FC} from "react";

export interface ActionProps {
  record: BaseRecord
}

export interface ActionList {
  [key: string]: FC<ActionProps> | false;
}

