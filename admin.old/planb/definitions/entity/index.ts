import {BaseRecord} from "@pankod/refine-core/src/interfaces";

export interface Entity extends BaseRecord {
  '@id': string
  id: string | number
}
