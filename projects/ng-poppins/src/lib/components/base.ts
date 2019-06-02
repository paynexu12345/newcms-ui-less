import { EventEmitter, Output, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { commonInitCfg } from './comp-utils';
declare var $;
export type PositionType = "downLeft" | "downRight" | "upLeft" | "upRight";
export const HEADER_HEIGHT = 80;
export abstract class Container<T> {
  childComps: T[];
  commonAddChildComp: (child: T) => void;
  commonRemoveChildComp: (child: T) => void;
}
export interface Configurable {
  readonly reservedCssClasses: string[];
  readonly rootCssClass: string;
  config: { [propName: string]: any };
  _config: { [propName: string]: any };
}
export class BaseComponent {
  private _isDisabled = false;
  public get isDisabled() {
    return this._isDisabled;
  }
  public set isDisabled(value) {
    this._isDisabled = value;
  }
  private _isActive = false;
  public get isActive() {
    return this._isActive;
  }
  public set isActive(value) {
    if (value) {
      this.commonActivate();
    } else {
      this.commonDeactivate();
    }

  }
  @Output() onActivate = new EventEmitter();
  @Output() onDeactivate = new EventEmitter();
  protected commonActivate() {
    if (this._isDisabled) return;
    if (!this._isActive) {
      this.onActivate.emit(this);
    }
    this._isActive = true;
  }

  protected commonDeactivate() {
    if (this._isDisabled) return;
    if (this._isActive) {
      this.onDeactivate.emit(this);
    }
    this._isActive = false;
  }
}
export class BaseService { }
export class ContainerService<T> extends BaseService implements Container<T> {
  constructor() {
    super();
  }
  childComps: T[] = [];
  commonAddChildComp(child: T) {
    this.childComps.push(child);
  }
  commonRemoveChildComp(child: T) {
    this.childComps.forEach((comp, index) => {
      if (child == comp) this.childComps.splice(index, 1);
    });
  }
  addChildComp(child: T, ...args) {
    this.commonAddChildComp(child);
  }
  removeChildComp(child: T, ...args) {
    this.commonRemoveChildComp(child);
  }
}
export class ContainerComponent<T> extends BaseComponent implements Configurable, Container<T> {
  constructor() {
    super();
  }
  reservedCssClasses = ["disabled", "active"];
  rootCssClass = "";
  config: { [propName: string]: any };
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }
  childComps: T[] = [];
  commonAddChildComp(child: T) {
    this.childComps.push(child);
  }
  commonRemoveChildComp(child: T) {
    this.childComps.forEach((comp, index) => {
      if (child == comp) this.childComps.splice(index, 1);
    });
  }
  addChildComp(child: T, ...args) {
    this.commonAddChildComp(child);
  };
  removeChildComp(child: T, ...args) {
    this.commonRemoveChildComp(child);
  };
}
export class ChildComponent extends BaseComponent {
  constructor() {
    super();
  }
  containerComp: { [propName: string]: any };
}
export class NgPopBaseConfig {
  cssClasses?: string[];
  items?: { [s: string]: any }[];
  isActive?: boolean;
  isDisabled?: boolean;
}
