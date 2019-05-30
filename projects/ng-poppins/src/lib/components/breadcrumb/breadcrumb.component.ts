import { Component, Input } from "@angular/core";
import { BreadcrumbConfig, DEFAULT_BREADCRUMB_CONFIG } from "./class";
import { commonInitCfg } from "../comp-utils";
import { HasConfig } from "../interfaces";
@Component({
  selector: "ng-pop-breadcrumb",
  template: `
    <ol [class]="rootCssClass">
      <li *ngFor="let breadCrumb of config.items; let i = index">
        <a
          class="link"
          *ngIf="breadCrumb.routerLink"
          [routerLink]="breadCrumb.routerLink"
          [queryParams]="breadCrumb?.queryParams"
          >{{ breadCrumb.name }}</a
        >
        <ng-container *ngIf="!breadCrumb.routerLink">{{
          breadCrumb.name
        }}</ng-container>
      </li>
    </ol>
  `
})
export class NgPopBreadcrumbComponent implements HasConfig {
  constructor() {}
  rootCssClass = "ng-pop-breadcrumb";
  reservedCssClasses: string[] = [];
  config: BreadcrumbConfig = DEFAULT_BREADCRUMB_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }
  get _conifg() {
    return this.config;
  }
  ngOnInit() {}
}
