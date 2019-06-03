import { NgPopBaseConfig } from "../base";

export class HeaderNavItem {
  id: number;
  url: string;
  referTo: string;
  text:string;
  isActive?: boolean;
}

export class HeaderNavConfig implements NgPopBaseConfig {
  items: HeaderNavItem[];
  cssClasses?: string[];
  eject:boolean;
}

export const DEFAULT_HEADER_NAV_ITEM = {
  id: 0,
  url: "",
  referTo: "",
  text:"",
  isActive: false
};

export const DEFAULT_HEADER_NAV_CONFIG: HeaderNavConfig = {
  items: [],
  cssClasses: [],
  eject:true
};
