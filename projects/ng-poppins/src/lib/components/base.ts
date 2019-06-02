import { EventEmitter, Output, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { commonInitCfg, KEY_ESC, KEY_UP, KEY_DOWN, KEY_ENTER } from './comp-utils';
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
  findPrevNotDisabled<T extends BaseComponent>(arr: T[], from: number): T | null {
    if (arr[from - 1]) {
      if (arr[from - 1].isDisabled) {
        return this.findPrevNotDisabled(arr, from - 1);
      } else {
        return arr[from - 1];
      }
    } else {
      return null;
    }
  }
  findNextNotDisabled<T extends BaseComponent>(arr: T[], from: number): T | null {
    if (arr[from + 1]) {
      if (arr[from + 1].isDisabled) {
        return this.findNextNotDisabled(arr, from + 1);
      } else {
        return arr[from + 1];
      }
    } else {
      return null;
    }
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
export class InputComponent extends BaseComponent{
  placeholder = "";
  searchText = "";
  searchFlag = null;
  @Output() onSearch = new EventEmitter();
  @Output() onPressUpKey = new EventEmitter();
  @Output() onPressDownKey = new EventEmitter();
  @Output() onPressEnterKey = new EventEmitter();
  @Output() onPressEscKey = new EventEmitter();
  @ViewChild("elementRef") elementRef: ElementRef;
  onkeydown($event) {
    // if ($event.keyCode == KEY_UP) {
    //   for (let i = 0, len = this.containerComp.childComps.length; i < len; i++) {
    //     if (this.containerComp.childComps[i].isActive) {
    //       const prev = this.findPrevNotDisabled(this.containerComp.childComps, i);
    //       if (prev) {
    //         prev.isActive = true;
    //         this.containerComp.childComps[i].isActive = false;
    //       }
    //       break;
    //     }
    //   }
    //   this.onPressUpKey.emit();
    // }
    // if ($event.keyCode == KEY_DOWN) {
    //   for (let i = 0, len = this.containerComp.childComps.length; i < len; i++) {
    //     if (this.containerComp.childComps[i].isActive) {
    //       const next = this.findNextNotDisabled(this.containerComp.childComps, i);
    //       if (next) {
    //         next.isActive = true;
    //         this.containerComp.childComps[i].isActive = false;
    //       }
    //       break;
    //     }
    //   }
    //   this.onPressDownKey.emit();
    // }
    // if ($event.keyCode == KEY_ENTER) {
    //   this.containerComp.childComps.forEach(child => {
    //     if (child.isActive) {
    //       this.containerComp.activeItem = child.item;
    //       child.item.isActive = true;
    //     } else {
    //       child.item.isActive = false;
    //     }
    //   });
    //   this.containerComp.isActive = false;
    //   this.onPressEnterKey.emit();
    // }
    // if ($event.keyCode == KEY_ESC) {
    //   this.containerComp.isActive = false;
    //   this.onPressEscKey.emit();
    // }
    this.commonFilterKeydown($event);
  }
  protected commonFilterKeydown($event){
    clearTimeout(this.searchFlag);
    this.searchFlag = setTimeout(() => {
      if ($event.keyCode != KEY_ESC &&
        $event.keyCode != KEY_UP &&
        $event.keyCode != KEY_DOWN &&
        $event.keyCode != KEY_ENTER) {
        this.onSearch.emit(this.searchText);
      }
    }, 300);
  }
}
export class NgPopBaseConfig {
  cssClasses?: string[];
  items?: { [s: string]: any }[];
  isActive?: boolean;
  isDisabled?: boolean;
}
