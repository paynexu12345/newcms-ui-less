import { NgPopBaseConfig } from '../base';
export type BTN_TYPE_NORMAL = 1;
export type BTN_TYPE_DANGER = 2;
export class NgPopBtnGroupItem{
  id:number;
  text:string;
  type?:BTN_TYPE_NORMAL | BTN_TYPE_DANGER;
  icon?:string;
  isDisabled?:boolean;
}
export class NgPopBtnGroupConfig implements NgPopBaseConfig{
  items:NgPopBtnGroupItem[];
  cssClasses:string[];
  isActive:boolean;
  isDisabled:boolean;
}
export const DEFAULT_BTN_GROUP_CONFIG:NgPopBtnGroupConfig = {
  items:[
    {
      id:1,
      text:"Add",
      type:1
    },
    {
      id:2,
      text:"Insert",
      type:1,
      isDisabled:true
    },
    {
      id:3,
      text:"Append",
      type:1
    },
    {
      id:4,
      text:"Append",
      type:1
    },
    {
      id:5,
      text:"Append",
      type:1
    },
    {
      id:6,
      text:"Remove",
      type:2
    }
  ],
  cssClasses:[],
  isActive:true,
  isDisabled:false
}
export const DEFAULT_BTN_GROUP_ITEM:NgPopBtnGroupItem = {
  id:1,
  text:"Add"
}