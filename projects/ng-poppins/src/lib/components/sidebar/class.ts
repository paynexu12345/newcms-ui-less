import {NgPopBaseConfig} from '../base';

export class Menu
{
  id?: number;
  /**
   * The text show in sidebar
   */
  name: string;
  /**
   * This menu is active or not
   */
  isActive: boolean;
  /**
   *menu is open or not
   */
  isOpen?: boolean;
  /**
   * Url of this menu item link to
   */
  url?: string;
  /**
   * Match for url. eg:
   * If url is : `/content/program/edit`,
   * then nameForUrl's value should be `program`.
   */
  nameForUrl?: string;
  icon?: string;
  children?: Menu[];
  permissionRels?: string[];
}
export class SideBarConfig implements NgPopBaseConfig
{
  menus: Menu[];
  cssClasses?: string[];
}
export const EXAMPLE_SIDEBAR_CONFIG: SideBarConfig = {
  menus: [],
  cssClasses: []
}