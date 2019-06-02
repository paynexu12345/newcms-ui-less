
import { NgPopBaseConfig } from '../base';

export class InternalNgPopSelectItem {
  id?: number;
  text: string | number;
  disabled?: boolean;
}
export class NgPopSelectItem{
  [propName: string]: any;
  isDisabled?: boolean;
  isActive?: boolean;
}

export class NgPopSelectConfig implements NgPopBaseConfig {
  width: string;
  items: NgPopSelectItem[];
  textKey: string;
  idKey: string;
  cssClasses?: string[];
  isDisabled?: boolean;
}

export const DEFAULT_NGPOP_SELECT_CONFIG: NgPopSelectConfig = {
  width: "160px",
  items: [
    {
      id: 1,
      name: "Content Provider Administractor",
      isActive: true
    },
    {
      id: 2,
      name: "Content Provider Administractor2",
      isDisabled: true
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    },
    {
      id: 2,
      name: "Content Provider Employee",
      isActive: false
    }
  ],
  textKey: "name",
  idKey: "id",
  // disabled:true
};
