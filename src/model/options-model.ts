import { BasicFetchResult } from '@ent-core/logics/api';

export interface DemoOptionsItem {
  label: string;
  value: string;
}

export interface selectParams {
  id: number | string;
}

/**
 * @description: Request list return value
 */
export type DemoOptionsGetResultModel = BasicFetchResult<DemoOptionsItem>;
