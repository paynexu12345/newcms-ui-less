import { CustomizeClassNames } from "../interfaces";
export class Breadcrumb{
  name:string;
  routerLink?:string;
  queryParams?:Object;
}
export class BreadcrumbConfig implements CustomizeClassNames{
  items:Breadcrumb[];
  cssClasses?:string[];
}

export const DEFAULT_BREADCRUMB_CONFIG:BreadcrumbConfig = {
  items:[],
  cssClasses:[]
}