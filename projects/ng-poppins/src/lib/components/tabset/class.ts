import { NgPopBaseConfig } from '../base';

export class NgPopTabConfig implements NgPopBaseConfig{
  items:NgPopTabItem[];
  cssClasses?: string[];
  eject?:boolean;
}
export class NgPopTabItem {
  header : string;
  isActive : boolean;
  isDisabled ?:boolean;
}
export const DEFAULT_TAB_CONFIG: NgPopTabConfig = {
  items:[
    {
      header :"Tab1",
      isActive:true
    },
    {
      header :"Tab2",
      isActive:false,
      isDisabled:true
    },
    {
      header :"Tab3",
      isActive:false
    }
  ],
  cssClasses: []
};
