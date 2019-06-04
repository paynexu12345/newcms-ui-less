import { NgPopBaseConfig } from "../base";

export class Breadcrumb {
  name: string;
  routerLink?: string;
  queryParams?: Object;
}
export class BreadcrumbConfig implements NgPopBaseConfig {
  items: Breadcrumb[];
  cssClasses?: string[];
}

export const DEFAULT_BREADCRUMB_CONFIG: BreadcrumbConfig = {
  items: [],
  cssClasses: []
};
