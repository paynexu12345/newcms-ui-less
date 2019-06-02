import { NgPopBaseConfig } from '../base';

export class TabConfig implements NgPopBaseConfig{
  cssClasses?: string[];
}
export const DEFAULT_TAB_CONFIG: TabConfig = {
  cssClasses: []
};
