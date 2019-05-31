import { CustomizeClassNames, Disabled } from '../interfaces';

export class InternalNgPopSelectItem {
  id?: number;
  text: string | number;
  disabled?: boolean;
}
export class NgPopSelectItem implements Disabled {
  [propName: string]: any;
  disabled?: boolean;
  isActive?: boolean;
}

export class NgPopSelectConfig implements CustomizeClassNames, Disabled {
  width: string;
  items: NgPopSelectItem[];
  textKey: string;
  idKey: string;
  cssClasses?: string[];
  disabled?: boolean;
}

export const DEFAULT_NGPOP_SELECT_CONFIG: NgPopSelectConfig = {
  width: "160px",
  items: [
    {
      id: 1,
      name: "Content Provider",
      isActive: false,
      disabled: true
    },
    {
      id: 2,
      name: "Content Provider2",
      isActive: true
    }
  ],
  textKey: "name",
  idKey: "id",
  // disabled:true
};
