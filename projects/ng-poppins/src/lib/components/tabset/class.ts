import { CustomizeClassNames } from '../interfaces';

export class TabConfig implements CustomizeClassNames{
  activeIndex?:number;
  cssClasses?:string[]
}
export const DEFAULT_TAB_CONFIG:TabConfig = {
  activeIndex:1,
  cssClasses:[]
}