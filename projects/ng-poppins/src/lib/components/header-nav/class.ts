import { CustomizeClassNames } from '../interfaces';

export class HeaderNavItem{
  id:number;
  url:string;
  referTo:string;
}
export class HeaderNavConfig implements CustomizeClassNames{
  items:HeaderNavItem[];
  activeIndex:number;
  cssClasses?:string[];
}

export const DEFAULT_HEADER_NAV_ITEM = {
  id:0,
  url:"",
  referTo:""
}

export const DEFAULT_HEADER_NAV_CONFIG:HeaderNavConfig = {
  items:[],
  activeIndex:0,
  cssClasses:[]
}