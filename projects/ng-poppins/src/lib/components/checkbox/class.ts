import {NgPopBaseConfig} from '../base';

export class NgPopCheckBoxConfig implements NgPopBaseConfig
{

  isDisabled?: boolean;
  isActive?: boolean;
  type: number;
  name: string;
  text?: string;
}

export const EXAMPLE_CHECKBOX_CONFIG: NgPopCheckBoxConfig = {
  type: 2,
  name: "test",
  isDisabled: true
}