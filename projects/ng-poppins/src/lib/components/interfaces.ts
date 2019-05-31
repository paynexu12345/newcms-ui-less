import { EventEmitter, ElementRef } from "@angular/core";
export type PositionType = "downLeft" |"downRight" | "upLeft" |"upRight";
export abstract class AbstractContainerComponent {
  childComps: any[];
  addChildComp: (child: any) => void;
  removeChildComp: (child: any) => void;
}
export abstract class ChildComponent {
  containerComp: any;
}
export abstract class BaseConfigComponent {
  readonly reservedCssClasses?: string[];
  readonly rootCssClass: string;
  config: { [propName: string]: any };
  _config: { [propName: string]: any };
}
export interface CustomizeClassNames {
  cssClasses?: string[];
}
export interface Disabled {
  disabled?: boolean;
}
export interface activeIndex {
  activeIndex: number | number[];
}
export class ContainerComponent<T> {
  childComps: T[];
  commonAddChildComp(child: T) {
    this.childComps.push(child);
  }
  commonRemoveChildComp(child: T) {
    this.childComps.forEach((comp, index) => {
      if (child == comp) this.childComps.splice(index, 1);
    });
  }
  addChildComp: (child: T, ...args) => void;
  removeChildComp: (child: T, ...args) => void;
}

export class AlignDirection{
  isVisible = false;
  direction: PositionType = "downLeft";
  element: ElementRef;
  setPosition() {
    let pos = this.element.nativeElement.getBoundingClientRect();
    if (pos.left + this.element.nativeElement.offsetWidth > window.innerWidth) {
      if (
        pos.top + this.element.nativeElement.offsetHeight >
        window.innerHeight
      ) {
        this.direction = "upRight";
      } else {
        this.direction = "downRight";
      }
    } else {
      if (
        pos.top + this.element.nativeElement.offsetHeight >
        window.innerHeight
      ) {
        this.direction = "upLeft";
      } else {
        this.direction = "downLeft";
      }
    }
  }
  setVisible(){
    this.isVisible = true;
  }
}

export class Activatable {
  isActive: boolean;
  onActivate: EventEmitter<any>;
  onDeactivate: EventEmitter<any>;
  commonActivate() {
    if (!this.isActive) {
      this.onActivate.emit(this);
    }
    this.isActive = true;
  }
  commonDeactivate() {
    if (this.isActive) {
      this.onDeactivate.emit(this);
    }
    this.isActive = false;
  }
  activate: (...args) => void;
  deactivate: (...args) => void;
}
